import { trigger, animate, style, transition, group, query } from '@angular/animations';

export const imageTransitionAnimLtoR =
    [
        group([
            query(':enter',
                [
                    style({ opacity: 0, transform: 'translateX(-200px) scale(0.5)' }),
                    animate('0.8s ease',
                        style({ opacity: 1, transform: 'translateX(0px) scale(1)' }))
                ], { optional: true }),
            query(':leave',
                [
                    style({ opacity: 1, transform: 'translateX(0px) scale(1)' }),
                    animate('0.8s ease',
                        style({ opacity: 0, transform: 'translateX(200px) scale(0.5)' }))
                ], { optional: true }),
        ])
    ];
export const imageTransitionAnimRtoL =
    [
        group([
            query(':enter',
                [
                    style({ opacity: 0, transform: 'translateX(200px) scale(0.5)' }),
                    animate('0.8s ease',
                        style({ opacity: 1, transform: 'translateX(0px) scale(1)' }))
                ], { optional: true }),
            query(':leave',
                [
                    style({ opacity: 1, transform: 'translateX(0px) scale(1)' }),
                    animate('0.8s ease',
                        style({ opacity: 0, transform: 'translateX(-200px) scale(0.5)' }))
                ], { optional: true }),
        ])
    ];