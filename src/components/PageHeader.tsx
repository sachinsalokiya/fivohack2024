import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 text-center"
    >
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default PageHeader;