#!/bin/bash

echo "🛠️ Corrigiendo imports con casing incorrecto..."

ROOT_DIR="$(pwd)"
SRC_DIRS=("components" "app" "lib" "utils" "constants" "types")
EXTENSIONS=(".tsx" ".ts" ".js" ".jsx")

# Buscar coincidencia con casing correcto
find_correct_case_path() {
  local dir_path="$1"
  local name_to_match="$2"

  if [[ ! -d "$dir_path" ]]; then
    return
  fi

  # Buscar archivos o carpetas con coincidencia case-insensitive
  local match
  match=$(ls "$dir_path" 2>/dev/null | grep -i "^${name_to_match}$")

  if [[ $(echo "$match" | wc -l) -eq 1 ]]; then
    echo "$match"
  else
    echo ""
  fi
}

fix_imports_in_file() {
  local file="$1"
  local changed=false

  while IFS= read -r line; do
    [[ "$line" =~ from\ [\'\"]([^\'\"]+)[\'\"] ]] || continue
    import_path="${BASH_REMATCH[1]}"

    # Ignorar imports de paquetes externos
    if [[ "$import_path" != @/* && "$import_path" != .* && "$import_path" != /* ]]; then
      continue
    fi

    if [[ "$import_path" == @/* ]]; then
      rel_path="${import_path#@/}"
      abs_path="$ROOT_DIR/$rel_path"
    else
      dir=$(dirname "$file")
      abs_path="$dir/$import_path"
    fi

    # Intentar encontrar coincidencia real en disco
    base_dir=$(dirname "$abs_path")
    base_name=$(basename "$abs_path")

    # Buscar casing correcto en archivos con extensiones comunes
    correct_name=""
    for ext in "${EXTENSIONS[@]}" ""; do
      correct_name=$(find_correct_case_path "$base_dir" "$base_name")
      if [[ -n "$correct_name" ]]; then
        break
      fi
    done

    # Si encontró una coincidencia exacta con casing correcto
    if [[ -n "$correct_name" && "$correct_name" != "$base_name" ]]; then
      new_import_path=$(echo "$import_path" | sed "s|$base_name\$|$correct_name|")

      echo "✅ Corrigiendo en: $file"
      echo "   Viejo: $import_path"
      echo "   Nuevo: $new_import_path"

      # Usar sed para reemplazar en el archivo original
      sed -i "s|$import_path|$new_import_path|g" "$file"
      changed=true
    fi
  done < "$file"

  if [[ "$changed" == true ]]; then
    echo "💾 Se corrigieron importaciones en: $file"
    echo ""
  fi
}

# Recorrer todos los archivos fuente
for dir in "${SRC_DIRS[@]}"; do
  find "$ROOT_DIR/$dir" -type f \( -name "*.ts" -o -name "*.tsx" \) | while read file; do
    fix_imports_in_file "$file"
  done
done

echo "🎉 Corrección automática finalizada."
