// apps/your-app/src/app/state/users.actions.ts
import { createAction, props } from '@ngrx/store';
import {Events} from '@irish-run-london/data-access'

export const loadEvents = createAction('[Users] Load Events');
export const loadEventsSuccess = createAction('[Events] Events Users Success', props<{ events: Events[] }>());
export const loadEventsFailure = createAction('[Events] Load Events Failure', props<{ error: any }>());
