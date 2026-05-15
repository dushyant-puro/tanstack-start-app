import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function RandomFlipButton() {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        to="/random"
        className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-gradient-to-br from-primary to-[oklch(0.62_0.2_45)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition md:text-base"
      >
        <Sparkles className="h-4 w-4" />
        Who Flipped Today?
      </Link>
    </motion.div>
  );
}
