export declare abstract class AbstractControl<T = any> {
    asyncValidator: AsyncValidatorFn | null;
    get dirty(): boolean;
    get disabled(): boolean;
    get enabled(): boolean;
    readonly errors: ValidationErrors | null;
    get invalid(): boolean;
    get parent(): FormGroup | FormArray;
    get pending(): boolean;
    readonly pristine: boolean;
    get root(): AbstractControl;
    readonly status: string;
    readonly statusChanges: Observable<any>;
    readonly touched: boolean;
    get untouched(): boolean;
    get updateOn(): FormHooks;
    get valid(): boolean;
    validator: ValidatorFn | null;
    readonly value: T | null;
    readonly valueChanges: Observable<T | null>;
    constructor(validator: ValidatorFn | null, asyncValidator: AsyncValidatorFn | null);
    clearAsyncValidators(): void;
    clearValidators(): void;
    disable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    enable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    get<T = any>(path: Array<string | number> | string): AbstractControl<T> | null;
    getError(errorCode: string, path?: Array<string | number> | string): any;
    hasError(errorCode: string, path?: Array<string | number> | string): boolean;
    markAllAsTouched(): void;
    markAsDirty(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsPending(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    markAsPristine(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsTouched(opts?: {
        onlySelf?: boolean;
    }): void;
    markAsUntouched(opts?: {
        onlySelf?: boolean;
    }): void;
    abstract patchValue(value: any, options?: Object): void;
    abstract reset(value?: any, options?: Object): void;
    setAsyncValidators(newValidator: AsyncValidatorFn | AsyncValidatorFn[] | null): void;
    setErrors(errors: ValidationErrors | null, opts?: {
        emitEvent?: boolean;
    }): void;
    setParent(parent: FormGroup | FormArray): void;
    setValidators(newValidator: ValidatorFn | ValidatorFn[] | null): void;
    abstract setValue(value: any, options?: Object): void;
    updateValueAndValidity(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare abstract class AbstractControlDirective {
    abstract get control(): AbstractControl | null;
    get dirty(): boolean | null;
    get disabled(): boolean | null;
    get enabled(): boolean | null;
    get errors(): ValidationErrors | null;
    get invalid(): boolean | null;
    get path(): string[] | null;
    get pending(): boolean | null;
    get pristine(): boolean | null;
    get status(): string | null;
    get statusChanges(): Observable<any> | null;
    get touched(): boolean | null;
    get untouched(): boolean | null;
    get valid(): boolean | null;
    get value(): any;
    get valueChanges(): Observable<any> | null;
    getError(errorCode: string, path?: Array<string | number> | string): any;
    hasError(errorCode: string, path?: Array<string | number> | string): boolean;
    reset(value?: any): void;
}

export declare interface AbstractControlOptions {
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null;
    updateOn?: 'change' | 'blur' | 'submit';
    validators?: ValidatorFn | ValidatorFn[] | null;
}

export declare class AbstractFormGroupDirective extends ControlContainer implements OnInit, OnDestroy {
    get asyncValidator(): AsyncValidatorFn | null;
    get control(): FormGroup;
    get formDirective(): Form | null;
    get path(): string[];
    get validator(): ValidatorFn | null;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare interface AsyncValidator extends Validator {
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

export declare interface AsyncValidatorFn {
    (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

export declare class CheckboxControlValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class CheckboxRequiredValidator extends RequiredValidator {
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare const COMPOSITION_BUFFER_MODE: InjectionToken<boolean>;

export declare abstract class ControlContainer extends AbstractControlDirective {
    get formDirective(): Form | null;
    name: string | number | null;
    get path(): string[] | null;
}

export declare interface ControlValueAccessor {
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(obj: any): void;
}

export declare class DefaultValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _compositionMode: boolean);
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class EmailValidator implements Validator {
    set email(value: boolean | string);
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare type ExtractGroupStateValue<T extends FormGroupModel<T>> = {
    [P in keyof T]: FormControlState<ExtractModelValue<T[P]>>;
};

export declare type ExtractGroupValue<T extends FormGroupModel<T>> = {
    [P in keyof T]: ExtractModelValue<T[P]>;
};

export declare type ExtractModelValue<Control extends AbstractControl> = Control extends FormControl<infer Value> ? Value | null : Control extends FormGroup<infer GroupModel> ? ExtractGroupValue<GroupModel> : Control extends FormArray<infer NestedControl> ? ExtractModelValue<NestedControl>[] : never;

export declare interface Form {
    addControl(dir: NgControl): void;
    addFormGroup(dir: AbstractFormGroupDirective): void;
    getControl(dir: NgControl): FormControl;
    getFormGroup(dir: AbstractFormGroupDirective): FormGroup;
    removeControl(dir: NgControl): void;
    removeFormGroup(dir: AbstractFormGroupDirective): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare class FormArray<T extends AbstractControl = AbstractControl> extends AbstractControl<ExtractModelValue<T>[]> {
    controls: T[];
    get length(): number;
    readonly value: ExtractModelValue<T>[];
    readonly valueChanges: Observable<ExtractModelValue<T>[]>;
    constructor(controls: T[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
    at(index: number): T;
    clear(): void;
    getRawValue(): ExtractModelValue<T>[];
    insert(index: number, control: T): void;
    patchValue(value: (ExtractModelValue<T> | undefined)[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    push(control: T): void;
    removeAt(index: number): void;
    reset(value?: FormControlState<ExtractModelValue<T>>[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setControl(index: number, control: T): void;
    setValue(value: ExtractModelValue<T>[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare class FormArrayName extends ControlContainer implements OnInit, OnDestroy {
    get asyncValidator(): AsyncValidatorFn | null;
    get control(): FormArray;
    get formDirective(): FormGroupDirective | null;
    name: string | number | null;
    get path(): string[];
    get validator(): ValidatorFn | null;
    constructor(parent: ControlContainer, validators: any[], asyncValidators: any[]);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export declare class FormBuilder {
    array<Item extends AbstractControl = AbstractControl>(controlsConfig: FormControlConfig<Item>[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormArray;
    control<T = any>(formState: FormControlState<T>, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormControl;
    group<T extends FormGroupModel<T> = FormGroupModel<any>>(controlsConfig: {
        [key in keyof T]: FormControlConfig<T[key]>;
    }, options?: AbstractControlOptions | {
        [key: string]: any;
    } | null): FormGroup;
}

export declare class FormControl<T = any> extends AbstractControl<T> {
    constructor(formState?: FormControlState<T>, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
    patchValue(value: null | T, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
    registerOnChange(fn: Function): void;
    registerOnDisabledChange(fn: (isDisabled: boolean) => void): void;
    reset(formState?: FormControlState<T>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setValue(value: null | T, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;
}

export declare type FormControlConfig<T extends AbstractControl> = T | FormControlState<ExtractModelValue<T>> | [FormControlState<ExtractModelValue<T>>, (ValidatorFn | ValidatorFn[] | AbstractControlOptions)?, (AsyncValidatorFn | AsyncValidatorFn[])?];

export declare class FormControlDirective extends NgControl implements OnChanges {
    get asyncValidator(): AsyncValidatorFn | null;
    get control(): FormControl;
    form: FormControl;
    set isDisabled(isDisabled: boolean);
    /** @deprecated */ model: any;
    get path(): string[];
    /** @deprecated */ update: EventEmitter<any>;
    get validator(): ValidatorFn | null;
    viewModel: any;
    constructor(validators: Array<Validator | ValidatorFn>, asyncValidators: Array<AsyncValidator | AsyncValidatorFn>, valueAccessors: ControlValueAccessor[], _ngModelWarningConfig: string | null);
    ngOnChanges(changes: SimpleChanges): void;
    viewToModelUpdate(newValue: any): void;
}

export declare class FormControlName extends NgControl implements OnChanges, OnDestroy {
    get asyncValidator(): AsyncValidatorFn;
    readonly control: FormControl;
    get formDirective(): any;
    set isDisabled(isDisabled: boolean);
    /** @deprecated */ model: any;
    name: string | number | null;
    get path(): string[];
    /** @deprecated */ update: EventEmitter<any>;
    get validator(): ValidatorFn | null;
    constructor(parent: ControlContainer, validators: Array<Validator | ValidatorFn>, asyncValidators: Array<AsyncValidator | AsyncValidatorFn>, valueAccessors: ControlValueAccessor[], _ngModelWarningConfig: string | null);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
}

export declare type FormControlState<T> = null | T | {
    value: null | T;
    disabled: boolean;
};

export declare class FormGroup<T extends FormGroupModel<T> = FormGroupModel<any>> extends AbstractControl<ExtractGroupValue<T>> {
    controls: {
        [key in keyof T]: T[key];
    };
    readonly value: ExtractGroupValue<T>;
    readonly valueChanges: Observable<ExtractGroupValue<T>>;
    constructor(controls: {
        [key in keyof T]: T[key];
    }, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
    addControl<K extends keyof T>(name: K, control: T[K]): void;
    contains(controlName: keyof T): boolean;
    getRawValue(): ExtractGroupValue<T>;
    patchValue<K extends keyof T>(value: Partial<ExtractGroupValue<T> | ExtractGroupStateValue<T>>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    registerControl<K extends keyof T>(name: K, control: T[K]): T[K];
    removeControl(name: keyof T): void;
    reset(value?: ExtractGroupValue<T> | ExtractGroupStateValue<T>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    setControl<K extends keyof T>(name: K, control: T[K]): void;
    setValue<K extends keyof T>(value: ExtractGroupValue<T> | ExtractGroupStateValue<T>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}

export declare class FormGroupDirective extends ControlContainer implements Form, OnChanges {
    get control(): FormGroup;
    directives: FormControlName[];
    form: FormGroup;
    get formDirective(): Form;
    ngSubmit: EventEmitter<any>;
    get path(): string[];
    readonly submitted: boolean;
    constructor(_validators: any[], _asyncValidators: any[]);
    addControl(dir: FormControlName): FormControl;
    addFormArray(dir: FormArrayName): void;
    addFormGroup(dir: FormGroupName): void;
    getControl(dir: FormControlName): FormControl;
    getFormArray(dir: FormArrayName): FormArray;
    getFormGroup(dir: FormGroupName): FormGroup;
    ngOnChanges(changes: SimpleChanges): void;
    onReset(): void;
    onSubmit($event: Event): boolean;
    removeControl(dir: FormControlName): void;
    removeFormArray(dir: FormArrayName): void;
    removeFormGroup(dir: FormGroupName): void;
    resetForm(value?: any): void;
    updateModel(dir: FormControlName, value: any): void;
}

export declare type FormGroupModel<T extends object> = {
    [P in keyof T]: AbstractControl;
};

export declare class FormGroupName extends AbstractFormGroupDirective implements OnInit, OnDestroy {
    name: string | number | null;
    constructor(parent: ControlContainer, validators: any[], asyncValidators: any[]);
}

export declare class FormsModule {
}

export declare class MaxLengthValidator implements Validator, OnChanges {
    maxlength: string | number;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class MinLengthValidator implements Validator, OnChanges {
    minlength: string | number;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare const NG_ASYNC_VALIDATORS: InjectionToken<(Function | Validator)[]>;

export declare const NG_VALIDATORS: InjectionToken<(Function | Validator)[]>;

export declare const NG_VALUE_ACCESSOR: InjectionToken<ControlValueAccessor>;

export declare abstract class NgControl extends AbstractControlDirective {
    get asyncValidator(): AsyncValidatorFn | null;
    name: string | number | null;
    get validator(): ValidatorFn | null;
    valueAccessor: ControlValueAccessor | null;
    abstract viewToModelUpdate(newValue: any): void;
}

export declare class NgControlStatus extends ɵangular_packages_forms_forms_g {
    constructor(cd: NgControl);
}

export declare class NgControlStatusGroup extends ɵangular_packages_forms_forms_g {
    constructor(cd: ControlContainer);
}

export declare class NgForm extends ControlContainer implements Form, AfterViewInit {
    get control(): FormGroup;
    get controls(): {
        [key: string]: AbstractControl;
    };
    form: FormGroup;
    get formDirective(): Form;
    ngSubmit: EventEmitter<any>;
    options: {
        updateOn?: FormHooks;
    };
    get path(): string[];
    readonly submitted: boolean;
    constructor(validators: any[], asyncValidators: any[]);
    addControl(dir: NgModel): void;
    addFormGroup(dir: NgModelGroup): void;
    getControl(dir: NgModel): FormControl;
    getFormGroup(dir: NgModelGroup): FormGroup;
    ngAfterViewInit(): void;
    onReset(): void;
    onSubmit($event: Event): boolean;
    removeControl(dir: NgModel): void;
    removeFormGroup(dir: NgModelGroup): void;
    resetForm(value?: any): void;
    setValue(value: {
        [key: string]: any;
    }): void;
    updateModel(dir: NgControl, value: any): void;
}

export declare class NgModel extends NgControl implements OnChanges, OnDestroy {
    get asyncValidator(): AsyncValidatorFn | null;
    readonly control: FormControl;
    get formDirective(): any;
    isDisabled: boolean;
    model: any;
    name: string;
    options: {
        name?: string;
        standalone?: boolean;
        updateOn?: FormHooks;
    };
    get path(): string[];
    update: EventEmitter<any>;
    get validator(): ValidatorFn | null;
    viewModel: any;
    constructor(parent: ControlContainer, validators: Array<Validator | ValidatorFn>, asyncValidators: Array<AsyncValidator | AsyncValidatorFn>, valueAccessors: ControlValueAccessor[]);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    viewToModelUpdate(newValue: any): void;
    static ngAcceptInputType_isDisabled: boolean | string;
}

export declare class NgModelGroup extends AbstractFormGroupDirective implements OnInit, OnDestroy {
    name: string;
    constructor(parent: ControlContainer, validators: any[], asyncValidators: any[]);
}

export declare class NgSelectOption implements OnDestroy {
    id: string;
    set ngValue(value: any);
    set value(value: any);
    constructor(_element: ElementRef, _renderer: Renderer2, _select: SelectControlValueAccessor);
    ngOnDestroy(): void;
}

export declare class NumberValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (_: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: number): void;
}

export declare class PatternValidator implements Validator, OnChanges {
    pattern: string | RegExp;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class RadioControlValueAccessor implements ControlValueAccessor, OnDestroy, OnInit {
    formControlName: string;
    name: string;
    onChange: () => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _registry: ɵangular_packages_forms_forms_n, _injector: Injector);
    fireUncheck(value: any): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class RangeValueAccessor implements ControlValueAccessor {
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (_: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class ReactiveFormsModule {
    static withConfig(opts: { warnOnNgModelWithFormControl: 'never' | 'once' | 'always';
    }): ModuleWithProviders<ReactiveFormsModule>;
}

export declare class RequiredValidator implements Validator {
    get required(): boolean | string;
    set required(value: boolean | string);
    registerOnValidatorChange(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare class SelectControlValueAccessor implements ControlValueAccessor {
    set compareWith(fn: (o1: any, o2: any) => boolean);
    onChange: (_: any) => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare class SelectMultipleControlValueAccessor implements ControlValueAccessor {
    set compareWith(fn: (o1: any, o2: any) => boolean);
    onChange: (_: any) => void;
    onTouched: () => void;
    value: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}

export declare type ValidationErrors = {
    [key: string]: any;
};

export declare interface Validator {
    registerOnValidatorChange?(fn: () => void): void;
    validate(control: AbstractControl): ValidationErrors | null;
}

export declare interface ValidatorFn {
    (control: AbstractControl): ValidationErrors | null;
}

export declare class Validators {
    static compose(validators: null): null;
    static compose(validators: (ValidatorFn | null | undefined)[]): ValidatorFn | null;
    static composeAsync(validators: (AsyncValidatorFn | null)[]): AsyncValidatorFn | null;
    static email(control: AbstractControl): ValidationErrors | null;
    static max(max: number): ValidatorFn;
    static maxLength(maxLength: number): ValidatorFn;
    static min(min: number): ValidatorFn;
    static minLength(minLength: number): ValidatorFn;
    static nullValidator(control: AbstractControl): ValidationErrors | null;
    static pattern(pattern: string | RegExp): ValidatorFn;
    static required(control: AbstractControl): ValidationErrors | null;
    static requiredTrue(control: AbstractControl): ValidationErrors | null;
}

export declare const VERSION: Version;
