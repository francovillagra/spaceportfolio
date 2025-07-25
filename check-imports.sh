#!/bin/bash

echo "🔍 Verificando imports con casing incorrecto y sugiriendo ruta correcta..."

ROOT_DIR="$(pwd)"
SRC_DIRS=("components" "app" "lib" "utils" "constants" "types")

# Función para normalizar paths y sugerir path correcto
suggest_correct_path() {
  local base_path="$1"
  local dir_path
  dir_path=$(dirname "$base_path")
  local file_name
  file_name=$(basename "$base_path")

  if [ ! -d "$dir_path" ]; then
    echo "   ⚠️ No existe el directorio: $dir_path"
    return
  fi

  # Buscar coincidencia de nombre ignorando el casing
  local match
  match=$(ls "$dir_path" 2>/dev/null | grep -i "^${file_name}$")

  if [ -n "$match" ]; then
    echo "   💡 Sugerencia: reemplazá '$file_name' por '$match' en el import."
  else
    echo "   🚫 No se encontró ningún archivo coincidente en: $dir_path"
  fi
}

check_imports_in_file() {
  local file="$1"
  while read -r line; do
    [[ "$line" =~ from\ [\'\"]([^\'\"]+)[\'\"] ]] || continue
    import_path="${BASH_REMATCH[1]}"

    # Ignorar imports de módulos externos
    if [[ "$import_path" != @/* && "$import_path" != .* && "$import_path" != /* ]]; then
      continue
    fi

    # Resolver ruta absoluta
    if [[ "$import_path" == @/* ]]; then
      rel_path="${import_path#@/}"
      abs_path="$ROOT_DIR/$rel_path"
    else
      dir=$(dirname "$file")
      abs_path="$dir/$import_path"
    fi

    # Buscar si el path existe con cualquiera de estas extensiones
    match_found=false
    for ext in ".tsx" ".ts" ".js" ".jsx" ""; do
      test_path="${abs_path}${ext}"
      if [[ -e "$test_path" ]]; then
        match_found=true
        break
      fi
    done

    if [[ "$match_found" == false ]]; then
      echo "❌ Import inválido en archivo: $file"
      echo "   Línea: $line"
      echo "   Buscado: $abs_path.tsx (o similar)"
      suggest_correct_path "$abs_path"
      echo ""
    fi
  done < <(grep -E "from ['\"](@|\.{1,2})/.+['\"]" "$file")
}

# Recorrer todos los archivos fuente
for dir in "${SRC_DIRS[@]}"; do
  find "$ROOT_DIR/$dir" -type f \( -name "*.ts" -o -name "*.tsx" \) | while read file; do
    check_imports_in_file "$file"
  done
done

echo "✅ Revisión completa."
