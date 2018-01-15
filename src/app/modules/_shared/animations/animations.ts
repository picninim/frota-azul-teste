import {trigger, transition, style, animate, query, stagger, state} from '@angular/animations';

export const Animation = {
    fadeUpDown  (time: number) {
        return trigger('fadeUpDown', [
            state('default', style({
                transform: 'translateY(0px)',
                opacity: 1
            })),
            state('*',   style({
                transform: 'translateY(0px)',
                opacity: 1
            })),
            state('up', style({
            transform: 'translateY(-10px)',
            opacity: 0
            })),
            state('void',   style({
                transform: 'translateY(-10px)',
                opacity: 0
            })),
            state('down',   style({
                transform: 'translateY(10px)',
                opacity: 0
            })),
            transition('default <=> up', animate(time || 300 + 'ms ease-in-out')),
            transition('default <=> down', animate(time || 300 + 'ms ease-in-out')),
            transition('* <=> void', animate(time || 300 + 'ms ease-in-out')),
        ]);
    }
};
