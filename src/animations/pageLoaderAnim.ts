import { trigger, animate, style, transition } from '@angular/animations';

export const pageLoaderAnim =
    trigger('PageLoaderAnim', [
        transition(
            ':enter',
            [
                style({ opacity: 0, }),
                animate('0.5s ease',
                    style({ opacity: 1 }))
            ]
        ),
        transition(
            ':leave',
            [
                style({ opacity: 1 }),
                animate('0.5s ease',
                    style({ opacity: 0 }))
            ]
        )
    ])