import * as React from 'react';
import { Theme } from './Theme';

export interface IBaseProps {
    id?: string;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
    disabled?: boolean;
}

export interface IUrlProps {
    url: string;
    text: string;
}

export interface IChoiceProps<T> {
    id: string;
    forName: string;
    value: T;
    title?: string;
    description?: string;
    checked: boolean;
    onCheck?: (value: T) => void;
}

export interface ICheckableProps<T> extends IChoiceProps<T> {
    onUncheck?: (value: T) => void;
}

export interface IMultipleChoiseProps<T> {
    choices: Array<IChoiceProps<T>>;
    onChoose: (value: T) => void;
}

export interface IClipboardAwareProps<T> {
    onCopy?: React.ClipboardEventHandler<T>;
    onCopyCapture?: React.ClipboardEventHandler<T>;
    onCut?: React.ClipboardEventHandler<T>;
    onCutCapture?: React.ClipboardEventHandler<T>;
    onPaste?: React.ClipboardEventHandler<T>;
    onPasteCapture?: React.ClipboardEventHandler<T>;
}

export interface IFormControlProps<T> {
    value?: string;
    label?: string;
    readOnly?: boolean;
    onChange?: React.FormEventHandler<T>;
    onChangeCapture?: React.FormEventHandler<T>;
    onInput?: React.FormEventHandler<T>;
    onInputCapture?: React.FormEventHandler<T>;
    onReset?: React.FormEventHandler<T>;
    onResetCapture?: React.FormEventHandler<T>;
    onSubmit?: React.FormEventHandler<T>;
    onSubmitCapture?: React.FormEventHandler<T>;
    onInvalid?: React.FormEventHandler<T>;
    onInvalidCapture?: React.FormEventHandler<T>;
}

export interface IKeyboardAwareProps<T> {
    value?: string;
    onKeyDown?: React.KeyboardEventHandler<T>;
    onKeyDownCapture?: React.KeyboardEventHandler<T>;
    onKeyPress?: React.KeyboardEventHandler<T>;
    onKeyPressCapture?: React.KeyboardEventHandler<T>;
    onKeyUp?: React.KeyboardEventHandler<T>;
    onKeyUpCapture?: React.KeyboardEventHandler<T>;
}

export interface IFocusableProps<T> {
    onFocus?: React.FocusEventHandler<T>;
    onFocusCapture?: React.FocusEventHandler<T>;
    onBlur?: React.FocusEventHandler<T>;
    onBlurCapture?: React.FocusEventHandler<T>;
}

export interface IMouseAwareProps<T> {
    onClick?: React.MouseEventHandler<T>;
    onClickCapture?: React.MouseEventHandler<T>;
    onContextMenu?: React.MouseEventHandler<T>;
    onContextMenuCapture?: React.MouseEventHandler<T>;
    onDoubleClick?: React.MouseEventHandler<T>;
    onDoubleClickCapture?: React.MouseEventHandler<T>;
    onDrag?: React.DragEventHandler<T>;
    onDragCapture?: React.DragEventHandler<T>;
    onDragEnd?: React.DragEventHandler<T>;
    onDragEndCapture?: React.DragEventHandler<T>;
    onDragEnter?: React.DragEventHandler<T>;
    onDragEnterCapture?: React.DragEventHandler<T>;
    onDragExit?: React.DragEventHandler<T>;
    onDragExitCapture?: React.DragEventHandler<T>;
    onDragLeave?: React.DragEventHandler<T>;
    onDragLeaveCapture?: React.DragEventHandler<T>;
    onDragOver?: React.DragEventHandler<T>;
    onDragOverCapture?: React.DragEventHandler<T>;
    onDragStart?: React.DragEventHandler<T>;
    onDragStartCapture?: React.DragEventHandler<T>;
    onDrop?: React.DragEventHandler<T>;
    onDropCapture?: React.DragEventHandler<T>;
    onMouseDown?: React.MouseEventHandler<T>;
    onMouseDownCapture?: React.MouseEventHandler<T>;
    onMouseEnter?: React.MouseEventHandler<T>;
    onMouseLeave?: React.MouseEventHandler<T>;
    onMouseMove?: React.MouseEventHandler<T>;
    onMouseMoveCapture?: React.MouseEventHandler<T>;
    onMouseOut?: React.MouseEventHandler<T>;
    onMouseOutCapture?: React.MouseEventHandler<T>;
    onMouseOver?: React.MouseEventHandler<T>;
    onMouseOverCapture?: React.MouseEventHandler<T>;
    onMouseUp?: React.MouseEventHandler<T>;
    onMouseUpCapture?: React.MouseEventHandler<T>;
}

export interface ISelectableProps<T> {
    onSelect?: React.ReactEventHandler<T>;
    onSelectCapture?: React.ReactEventHandler<T>;
}

export interface IScrollableProps<T> {
    onScroll?: React.UIEventHandler<T>;
    onScrollCapture?: React.UIEventHandler<T>;
}

export interface IWheelAwareProps<T> {
    onWheel?: React.WheelEventHandler<T>;
    onWheelCapture?: React.WheelEventHandler<T>;
}

export interface ITouchableProps<T> {
    onTouchCancel?: React.TouchEventHandler<T>;
    onTouchCancelCapture?: React.TouchEventHandler<T>;
    onTouchEnd?: React.TouchEventHandler<T>;
    onTouchEndCapture?: React.TouchEventHandler<T>;
    onTouchMove?: React.TouchEventHandler<T>;
    onTouchMoveCapture?: React.TouchEventHandler<T>;
    onTouchStart?: React.TouchEventHandler<T>;
    onTouchStartCapture?: React.TouchEventHandler<T>;
}

export interface IMediaProps<T> {
    uri: string;
    alt: string;
    onAbort?: React.ReactEventHandler<T>;
    onAbortCapture?: React.ReactEventHandler<T>;
    onCanPlay?: React.ReactEventHandler<T>;
    onCanPlayCapture?: React.ReactEventHandler<T>;
    onCanPlayThrough?: React.ReactEventHandler<T>;
    onCanPlayThroughCapture?: React.ReactEventHandler<T>;
    onDurationChange?: React.ReactEventHandler<T>;
    onDurationChangeCapture?: React.ReactEventHandler<T>;
    onEmptied?: React.ReactEventHandler<T>;
    onEmptiedCapture?: React.ReactEventHandler<T>;
    onEncrypted?: React.ReactEventHandler<T>;
    onEncryptedCapture?: React.ReactEventHandler<T>;
    onEnded?: React.ReactEventHandler<T>;
    onEndedCapture?: React.ReactEventHandler<T>;
    onLoadedData?: React.ReactEventHandler<T>;
    onLoadedDataCapture?: React.ReactEventHandler<T>;
    onLoadedMetadata?: React.ReactEventHandler<T>;
    onLoadedMetadataCapture?: React.ReactEventHandler<T>;
    onLoadStart?: React.ReactEventHandler<T>;
    onLoadStartCapture?: React.ReactEventHandler<T>;
    onPause?: React.ReactEventHandler<T>;
    onPauseCapture?: React.ReactEventHandler<T>;
    onPlay?: React.ReactEventHandler<T>;
    onPlayCapture?: React.ReactEventHandler<T>;
    onPlaying?: React.ReactEventHandler<T>;
    onPlayingCapture?: React.ReactEventHandler<T>;
    onProgress?: React.ReactEventHandler<T>;
    onProgressCapture?: React.ReactEventHandler<T>;
    onRateChange?: React.ReactEventHandler<T>;
    onRateChangeCapture?: React.ReactEventHandler<T>;
    onSeeked?: React.ReactEventHandler<T>;
    onSeekedCapture?: React.ReactEventHandler<T>;
    onSeeking?: React.ReactEventHandler<T>;
    onSeekingCapture?: React.ReactEventHandler<T>;
    onStalled?: React.ReactEventHandler<T>;
    onStalledCapture?: React.ReactEventHandler<T>;
    onSuspend?: React.ReactEventHandler<T>;
    onSuspendCapture?: React.ReactEventHandler<T>;
    onTimeUpdate?: React.ReactEventHandler<T>;
    onTimeUpdateCapture?: React.ReactEventHandler<T>;
    onVolumeChange?: React.ReactEventHandler<T>;
    onVolumeChangeCapture?: React.ReactEventHandler<T>;
    onWaiting?: React.ReactEventHandler<T>;
    onWaitingCapture?: React.ReactEventHandler<T>;
}

export interface IImageProps<T> {
    uri: string;
    alt: string;
    onLoad?: React.ReactEventHandler<T>;
    onLoadCapture?: React.ReactEventHandler<T>;
    onError?: React.ReactEventHandler<T>;
    onErrorCapture?: React.ReactEventHandler<T>;
}

export interface IAnimatedProps<T> {
    onAnimationStart?: React.AnimationEventHandler<T>;
    onAnimationStartCapture?: React.AnimationEventHandler<T>;
    onAnimationEnd?: React.AnimationEventHandler<T>;
    onAnimationEndCapture?: React.AnimationEventHandler<T>;
    onAnimationIteration?: React.AnimationEventHandler<T>;
    onAnimationIterationCapture?: React.AnimationEventHandler<T>;
}

export interface ITransibleProps<T> {
    onTransitionEnd?: React.TransitionEventHandler<T>;
    onTransitionEndCapture?: React.TransitionEventHandler<T>;
}

export interface IThemeProps {
    theme?: Theme;
    outline?: boolean;
    fill?: boolean;
}
