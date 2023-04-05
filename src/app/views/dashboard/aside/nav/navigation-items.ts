import { Page } from 'src/app/core/models/page';

export const NAVIGATION_ITEMS: [string, Page][] = [
  [
    'questions_total',
    {
      label: 'Preguntas',
      relativePath: 'listado-de-preguntas',
      icon: 'list-question',
    },
  ],
  ['categories_total', { label: 'Categorías', relativePath: 'categorias', icon: 'categories' }],
  [
    'synonyms_total',
    {
      label: 'Sinónimos',
      relativePath: 'sinonimos',
      icon: 'synonymous',
    },
  ],
  ['segment', { label: 'Métricas', relativePath: 'metricas', icon: 'segment' }],
  ['users', { label: 'Usuarios', relativePath: 'usuarios', icon: 'users' }],
  ['profile', { label: 'Perfil', relativePath: 'perfil', icon: 'profile' }],
  ['alert', { label: 'Alertas', relativePath: 'alerta', icon: 'bell' }],
];
