declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | Element | Element[] | (string | Element)[], vars?: object);
    revert(): void;
    split(vars?: object): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(hard?: boolean): void;
    scrollTo(
      target: string | Element | number,
      smooth?: boolean,
      position?: string
    ): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    kill(): void;
  }
  export default ScrollSmoother;
}
