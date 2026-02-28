import { motion } from "framer-motion";
interface Props {
  tag: string;
  title: string;
}
const SectionHeading = ({ tag, title }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <p className="mb-2 font-mono text-sm text-primary">{"// " + tag}</p>
    <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    <div className="mt-3 h-px w-16 bg-primary/50" />
  </motion.div>
);
export default SectionHeading;
