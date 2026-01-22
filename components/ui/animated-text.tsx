import * as React from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string
    duration?: number
    delay?: number
    replay?: boolean
    className?: string
    textClassName?: string
    underlineClassName?: string
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
    underlineGradient?: string
    underlineHeight?: string
    underlineOffset?: string
    shouldAnimate?: boolean
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
    ({
        text,
        duration = 0.05, // Speed of stagger
        delay = 0.02,   // Initial delay
        replay = true,
        className,
        textClassName,
        underlineClassName,
        as: Component = "h1",
        underlineGradient = "from-brand-400 via-brand-600 to-brand-900",
        underlineHeight = "h-1",
        underlineOffset = "-bottom-2",
        shouldAnimate = true,
        ...props
    }, ref) => {
        const letters = Array.from(text)

        const container: Variants = {
            hidden: {
                opacity: 0
            },
            visible: (i: number = 1) => ({
                opacity: 1,
                transition: {
                    staggerChildren: duration,
                    delayChildren: i * delay
                }
            })
        }

        const child: Variants = {
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200
                }
            },
            hidden: {
                opacity: 0,
                y: 20,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200
                }
            }
        }

        const lineVariants: Variants = {
            hidden: {
                width: "0%",
                left: "50%"
            },
            visible: {
                width: "100%",
                left: "0%",
                transition: {
                    delay: letters.length * duration + 0.2, // Wait for letters to finish
                    duration: 0.8,
                    ease: "easeOut"
                }
            }
        }

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                whileInView={shouldAnimate ? "visible" : "hidden"}
                viewport={{ once: true, amount: 0.1 }}
                className={cn("flex flex-col items-center justify-center gap-2", className)}
                {...props}
            >
                <div className="relative">
                    <motion.div
                        style={{ display: "flex", overflow: "hidden", flexWrap: "wrap", justifyContent: "inherit" }}
                        variants={container}
                        className={cn("text-4xl font-bold text-center", textClassName)}
                    >
                        {letters.map((letter, index) => (
                            <motion.span key={index} variants={child}>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={lineVariants}
                        className={cn(
                            "absolute",
                            underlineHeight,
                            underlineOffset,
                            "bg-gradient-to-r",
                            underlineGradient,
                            underlineClassName
                        )}
                    />
                </div>
            </motion.div>
        )
    }
)
AnimatedText.displayName = "AnimatedText"

export { AnimatedText }
