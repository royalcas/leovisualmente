import { trigger, transition, query, style, group, animateChild, animate } from '@angular/animations';

const transitionIncrement = [
  style({ position: 'relative', overflow: 'hidden'}),
  query(':enter, :leave', [
    style({
      display: 'flex'
    })
  ], { optional: true }),
  query(':enter', [
    style({ transform: 'translateY(100vh)'})
  ], { optional: true }),
  group([
    query(':leave', [
      animate('500ms ease-out', style({ transform: 'translateY(-100vh)'})),
      animate('50ms 50ms', style({ width: 0, margin: 0, padding: 0 })),
    ], { optional: true })
  ]),
  group([
    query(':enter', [
      animate('500ms ease-out', style({ transform: 'translateY(0vh)'}))
    ], { optional: true })
  ]),
  query(':enter', animateChild(), { optional: true }),
];

const transitionDecrement = [
  style({ position: 'relative', overflow: 'hidden'}),
  query(':enter, :leave', [
    style({
      display: 'flex'
    })
  ], { optional: true }),
  query(':enter', [
    style({ transform: 'translateY(-100vh)'})
  ], { optional: true }),
  group([
    query(':leave', [
      animate('500ms ease-out', style({ transform: 'translateY(100vh)'})),
      animate('50ms 50ms', style({ width: 0, margin: 0, padding: 0 })),
    ], { optional: true })
  ]),
  group([
    query(':enter', [
      animate('500ms ease-out', style({ transform: 'translateY(0vh)'}))
    ], { optional: true })
  ]),
  query(':enter', animateChild(), { optional: true }),
];


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('spades => diamonds', transitionIncrement),
    transition('spades => clubs', transitionIncrement),
    transition('spades => hearths', transitionIncrement),
    transition('spades => duck', transitionIncrement),
    transition('diamonds => clubs', transitionIncrement),
    transition('diamonds => hearths', transitionIncrement),
    transition('diamonds => duck', transitionIncrement),
    transition('clubs => hearths', transitionIncrement),

    transition('* => duck', transitionIncrement),
    transition('duck => *', transitionDecrement),
    transition('hearths => clubs', transitionDecrement),
    transition('hearths => diamonds', transitionDecrement),
    transition('hearths => spades', transitionDecrement),
    transition('clubs => diamonds', transitionDecrement),
    transition('clubs => spades', transitionDecrement),
    transition('diamonds => spades', transitionDecrement),
    transition('clubs => spades', transitionDecrement),
    transition('hearths => spades', transitionDecrement),
    transition('duck => spades', transitionDecrement),
  ]);
