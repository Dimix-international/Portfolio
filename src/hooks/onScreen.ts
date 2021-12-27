import React, {useEffect, useState} from "react";

export const useOnScreen = (ref: React.MutableRefObject<HTMLElement | null>, rootMargin = "0px") => {
    // Состояние и задатчик для сохранения того, является ли элемент видимым
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Обновите наше состояние при срабатывании обратного вызова наблюдателя
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 0.1,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            ref.current && observer.unobserve(ref.current);
        };
    }, [ref, rootMargin]); // Пустой массив гарантирует, что эффект будет выполняться только при монтировании и размонтировании
    return isIntersecting;
}