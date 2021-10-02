import { trigger, transition, style, animate } from "@angular/animations";

export const titleFloatAnim =
    trigger('TitleFloatAnim', [
        transition(':enter', [
            style({ transform: 'translateY(-80px)' }),
            animate('250ms ease-out', style({ transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0)' }),
            animate('250ms ease-in', style({ transform: 'translateY(-80px)' }))
        ])
    ])