import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'feature';

export interface FeatureState {
    counter: number;
}

export interface AppState {
    feature: FeatureState;
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>(featureKey);

export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.counter
);