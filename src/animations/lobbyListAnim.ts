import { trigger, transition, style, animate, state, query, stagger } from "@angular/animations";

export const lobbyListAnim =
    trigger('LobbyListAnim', [
        transition('* <=> *', [
            query(':enter',
                [
                    style({ opacity: 0, transform: 'translateX(-50px)' }), stagger('200ms', animate('600ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0px)' })))
                ],
                { optional: true }
            ),
            // query(':leave',
            //     animate('200ms', style({ opacity: 0, transform: 'translateX(-50px)' })),
            //     { optional: true }
            // )
        ])
    ])