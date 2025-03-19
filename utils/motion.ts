export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 }, // Inicia fuera de la pantalla (izquierda) y transparente
        visible: {
            x: 0, // Se mueve a la posición original
            opacity: 1, // Se hace visible
            transition: {
                delay: delay, // Retraso antes de que comience la animación
                duration: 0.5, // Duración de la animación
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromTop(delay: number) {
    return {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}