import { Typography, Box } from '@mui/material';

interface MarkdownProps {
  content: string;
  variant?: 'body1' | 'body2';
}

export function Markdown({ content, variant = 'body1' }: MarkdownProps) {
  const formattedContent = content
    .replace(/#### (.*?)\n/g, '<h4>$1</h4>\n')
    .replace(/### (.*?)\n/g, '<h3>$1</h3>\n')
    .replace(/## (.*?)\n/g, '<h2>$1</h2>\n')
    .replace(/# (.*?)\n/g, '<h1>$1</h1>\n')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/- /g, '• ')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>');

  return (
    <Box
      component={Typography}
      variant={variant}
      align='left'
      sx={{
        '& p': { mb: 2 },
        '& h3': { mt: 4, mb: 2 },
        '& ul': { mb: 2 },
        '& li': { mb: 1 }
      }}
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    />
  );
} 