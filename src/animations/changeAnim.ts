import { trigger, transition, style, animate } from "@angular/animations";

export const changeAnim =
    trigger('ChangeAnim', [
        transition(':enter', [
            style({ transform: 'scale(0.0)', opacity: 0 }),
            animate('250ms cubic-bezier(0.16, 1, 0.3, 1)', style({ transform: 'scale(1.0)', opacity: 1 }))
        ]),
        transition(':leave', [
            style({ transform: 'scale(1)', opacity: 1 }),
            animate('250ms ease-out', style({ transform: 'scale(0.0)', opacity: 0 }))
        ])
    ])