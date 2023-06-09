import { readFileSync } from 'fs';

export const jwtConstants = {
  secret: readFileSync('jwt.evaluation.key', 'utf8'),
};
