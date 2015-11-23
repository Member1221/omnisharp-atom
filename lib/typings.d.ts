/// <reference path="../typingsTemp/atom/atom.d.ts" />

interface IFeature {
    activate(): void;
    dispose(): void;
    required: boolean;
    title: string;
    description: string;
    default?: boolean;
}

interface IAtomFeature extends IFeature {
    attach(): void;
}

interface ICompletionResult {
    word: string;
    prefix: string;
    renderLabelAsHtml: boolean;
    label: string;
}

interface OutputMessage {
    message: string;
    logLevel?: string;
}

interface WebComponent {
    createdCallback?: () => void;
    attachedCallback?: () => void;
    detachedCallback?: () => void;
    attributeChangedCallback?: (attrName: string, oldVal: any, newVal: any) => void;
}

declare module Fastdom {
    export function read(cb: Function): any;
    export function write(cb: Function): any;
    export function defer(frames: number, cb: Function): any;
    export function defer(cb: Function): any;
    export function clear(caller: any): void;
}
