import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CategoriesEffects } from './effects/categories.effects';
import { CountAsideEffects } from './effects/count-aside.effects';
import { QuestionsEffects } from './effects/questions.effects';
import { StatusesEffects } from './effects/statuses.effects';
import { SynonymsEffects } from './effects/synonyms.effects';
import { UsersEffects } from './effects/users.effects';
import { categoriesFeatureKey, categoriesReducer } from './reducers/categories.reducers';
import { countAsideFeatureKey, countAsideReducer } from './reducers/count-aside.reducers';
import {
  createQuestionFeatureKey,
  createQuestionReducer,
} from './reducers/create-question.reducers';
import {
  listCategoriesFeatureKey,
  listCategoriesReducer,
} from './reducers/list-categories.reducers';
import { questionsFeatureKey, questionsReducer } from './reducers/questions.reducers';
import { statusesFeatureKey, statusesReducer } from './reducers/statuses.reducers';
import { synonymsFeatureKey, synonymsReducer } from './reducers/synonyms.reducers';
import { UsersReducer, usersFeatureKey } from './reducers/users.reducers';
import { metaReducers } from './meta.reducers';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  imports: [
    NgrxStoreModule.forRoot(
      {
        [categoriesFeatureKey]: categoriesReducer,
        [questionsFeatureKey]: questionsReducer,
        [synonymsFeatureKey]: synonymsReducer,
        [statusesFeatureKey]: statusesReducer,
        [usersFeatureKey]: UsersReducer,
        [countAsideFeatureKey]: countAsideReducer,
        [createQuestionFeatureKey]: createQuestionReducer,
        [listCategoriesFeatureKey]: listCategoriesReducer,
      },
      {
        metaReducers,
      }
    ),
    EffectsModule.forRoot([
      CategoriesEffects,
      CountAsideEffects,
      QuestionsEffects,
      StatusesEffects,
      SynonymsEffects,
      UsersEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
    }),
  ],
})
export class StoreModule {}
