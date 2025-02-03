import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  text: string;
  className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ text, className }) => {
  return <div className={className}>{text}</div>;
}

export default EditableText;