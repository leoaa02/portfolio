import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

    return (
        <button
        className="px-2 py-2 rounded bg-muted text-foreground border mt-4 flex items-center justify-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Cambiar tema"
        >
        {theme === "dark" ? (
            <Sun className="h-5 w-5" />
        ) : (
            <Moon className="h-5 w-5" />
        )}
        </button>
    )
} 