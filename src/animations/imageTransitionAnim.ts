import { trigger, animate, style, transition, group, query } from '@angular/animations';

export const imageTransitionAnimLtoR =
    [
        group([
            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.8s ease',
                        style({ opacity: 1 }))
                ], { optional: true }),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.8s ease',
                        style({ opacity: 0 }))
                ], { optional: true }),
        ])
    ];
export const imageTransitionAnimRtoL =
    [
        group([
            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.8s ease',
                        style({ opacity: 1 }))
                ], { optional: true }),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.8s ease',
                        style({ opacity: 0 }))
                ], { optional: true }),
        ])
    ];