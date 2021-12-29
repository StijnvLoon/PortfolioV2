import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const routeTransitionAnim =
    trigger('RouteTransitionAnim', [
        transition('* => *', [
            query(':enter',
                [
                    style({ opacity: 0 }),
                ],
                { optional: true }
            ),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.5s ease', style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.5s ease-out', style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])
    ]);