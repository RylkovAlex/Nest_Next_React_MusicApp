import React, { useRef } from 'react';
import styles from './FileUpload.module.scss'

interface FileUploadProps {
  setFile: Function;
  accept?: string;
  children?: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    files && setFile(files[0])
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input className={styles.fileInput}
        type="file"
        accept={accept}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
