import { danger, warn, fail } from 'danger';

const hasChanges = danger.git.modified_files.length > 0;

if (!hasChanges) {
  warn('No se han realizado cambios en este pull request.');
} else {
  // Coloca aquí tus reglas y mensajes personalizados
}