import { trigger, transition, style, animate, state, query, stagger } from "@angular/animations";

export const lobbyListAnim =
    trigger('LobbyListAnim', [
        transition('* <=> *', [
            query(':enter',
                [
                    style({ opacity: 0, transform: 'scale(0.8)' }),
                    stagger('0.2s', animate('0.8s cubic-bezier(.22,1.54,.61,1)',
                    style({ opacity: 1, transform: 'scale(1.0)' })))
                ],
                { optional: true }
            ),
            query(':leave',
                animate('200ms', style({ opacity: 0 })),
                { optional: true }
            )
        ])
    ])