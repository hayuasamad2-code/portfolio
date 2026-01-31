import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    href,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium overflow-hidden transition-all duration-300";

    const variants = {
        primary: "px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95",
        secondary: "px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-lg shadow-secondary/20 hover:shadow-secondary/40 active:scale-95",
        outline: "px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-full hover:bg-white/5 active:scale-95",
        ghost: "px-4 py-2 text-neutral-400 hover:text-white transition-colors",
    };

    const Component = href ? 'a' : motion.button;
    const combinedProps = href ? { href, ...props } : { onClick, ...props };

    return (
        <Component
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...(!href && {
                whileHover: { y: -2 },
                whileTap: { scale: 0.98 }
            })}
            {...combinedProps}
        >
            {children}
        </Component>
    );
};

export default Button;
