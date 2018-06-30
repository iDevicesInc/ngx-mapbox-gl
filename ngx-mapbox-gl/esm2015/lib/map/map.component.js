/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { MapService } from './map.service';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
export class MapComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        /* Added by ngx-mapbox-gl */
        this.movingMethod = 'flyTo';
        this.resize = new EventEmitter();
        this.remove = new EventEmitter();
        this.mouseDown = new EventEmitter();
        this.mouseUp = new EventEmitter();
        this.mouseMove = new EventEmitter();
        this.click = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this.contextMenu = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchCancel = new EventEmitter();
        this.wheel = new EventEmitter();
        this.moveStart = new EventEmitter();
        this.move = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.zoomStart = new EventEmitter();
        this.zoomEvt = new EventEmitter();
        this.zoomEnd = new EventEmitter();
        this.rotateStart = new EventEmitter();
        this.rotate = new EventEmitter();
        this.rotateEnd = new EventEmitter();
        this.pitchStart = new EventEmitter();
        this.pitchEvt = new EventEmitter();
        this.pitchEnd = new EventEmitter();
        this.boxZoomStart = new EventEmitter();
        this.boxZoomEnd = new EventEmitter();
        this.boxZoomCancel = new EventEmitter();
        this.webGlContextLost = new EventEmitter();
        this.webGlContextRestored = new EventEmitter();
        this.load = new EventEmitter();
        this.render = new EventEmitter();
        this.error = new EventEmitter();
        this.data = new EventEmitter();
        this.styleData = new EventEmitter();
        this.sourceData = new EventEmitter();
        this.dataLoading = new EventEmitter();
        this.styleDataLoading = new EventEmitter();
        this.sourceDataLoading = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get mapInstance() {
        return this.MapService.mapInstance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.MapService.setup({
            accessToken: this.accessToken,
            customMapboxApiUrl: this.customMapboxApiUrl,
            mapOptions: {
                container: this.mapContainer.nativeElement,
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                style: this.style,
                hash: this.hash,
                interactive: this.interactive,
                bearingSnap: this.bearingSnap,
                pitchWithRotate: this.pitchWithRotate,
                classes: this.classes,
                attributionControl: this.attributionControl,
                logoPosition: this.logoPosition,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                refreshExpiredTiles: this.refreshExpiredTiles,
                maxBounds: this.maxBounds,
                scrollZoom: this.scrollZoom,
                boxZoom: this.boxZoom,
                dragRotate: this.dragRotate,
                dragPan: this.dragPan,
                keyboard: this.keyboard,
                doubleClickZoom: this.doubleClickZoom,
                touchZoomRotate: this.touchZoomRotate,
                trackResize: this.trackResize,
                center: this.center,
                zoom: this.zoom,
                bearing: this.bearing,
                pitch: this.pitch,
                renderWorldCopies: this.renderWorldCopies,
                maxTileCacheSize: this.maxTileCacheSize,
                localIdeographFontFamily: this.localIdeographFontFamily,
                transformRequest: this.transformRequest
            },
            mapEvents: this
        });
        if (this.cursorStyle) {
            this.MapService.changeCanvasCursor(this.cursorStyle);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.MapService.destroyMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.MapService.mapCreated$.toPromise();
            if (changes["cursorStyle"] && !changes["cursorStyle"].isFirstChange()) {
                this.MapService.changeCanvasCursor(changes["cursorStyle"].currentValue);
            }
            if (changes["minZoom"] && !changes["minZoom"].isFirstChange()) {
                this.MapService.updateMinZoom(changes["minZoom"].currentValue);
            }
            if (changes["maxZoom"] && !changes["maxZoom"].isFirstChange()) {
                this.MapService.updateMaxZoom(changes["maxZoom"].currentValue);
            }
            if (changes["scrollZoom"] && !changes["scrollZoom"].isFirstChange()) {
                this.MapService.updateScrollZoom(changes["scrollZoom"].currentValue);
            }
            if (changes["dragRotate"] && !changes["dragRotate"].isFirstChange()) {
                this.MapService.updateDragRotate(changes["dragRotate"].currentValue);
            }
            if (changes["touchZoomRotate"] && !changes["touchZoomRotate"].isFirstChange()) {
                this.MapService.updateTouchZoomRotate(changes["touchZoomRotate"].currentValue);
            }
            if (changes["doubleClickZoom"] && !changes["doubleClickZoom"].isFirstChange()) {
                this.MapService.updateDoubleClickZoom(changes["doubleClickZoom"].currentValue);
            }
            if (changes["keyboard"] && !changes["keyboard"].isFirstChange()) {
                this.MapService.updateKeyboard(changes["keyboard"].currentValue);
            }
            if (changes["dragPan"] && !changes["dragPan"].isFirstChange()) {
                this.MapService.updateDragPan(changes["dragPan"].currentValue);
            }
            if (changes["boxZoom"] && !changes["boxZoom"].isFirstChange()) {
                this.MapService.updateBoxZoom(changes["boxZoom"].currentValue);
            }
            if (changes["style"] && !changes["style"].isFirstChange()) {
                this.MapService.updateStyle(changes["style"].currentValue);
            }
            if (changes["maxBounds"] && !changes["maxBounds"].isFirstChange()) {
                this.MapService.updateMaxBounds(changes["maxBounds"].currentValue);
            }
            if (changes["fitBounds"] && !changes["fitBounds"].isFirstChange()) {
                this.MapService.fitBounds(changes["fitBounds"].currentValue, this.fitBoundsOptions);
            }
            if (this.centerWithPanTo && changes["center"] && !changes["center"].isFirstChange() &&
                !changes["zoom"] && !changes["bearing"] && !changes["pitch"]) {
                this.MapService.panTo(/** @type {?} */ ((this.center)), this.panToOptions);
            }
            else if (changes["center"] && !changes["center"].isFirstChange() ||
                changes["zoom"] && !changes["zoom"].isFirstChange() ||
                changes["bearing"] && !changes["bearing"].isFirstChange() ||
                changes["pitch"] && !changes["pitch"].isFirstChange()) {
                this.MapService.move(this.movingMethod, this.movingOptions, changes["zoom"] && this.zoom ? this.zoom[0] : undefined, changes["center"] ? this.center : undefined, changes["bearing"] && this.bearing ? this.bearing[0] : undefined, changes["pitch"] && this.pitch ? this.pitch[0] : undefined);
            }
        });
    }
}
MapComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-map',
                template: '<div #container></div>',
                styles: [`
  :host {
    display: block;
  }
  div {
    height: 100%;
    width: 100%;
  }
  `],
                providers: [
                    MapService
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = () => [
    { type: MapService }
];
MapComponent.propDecorators = {
    accessToken: [{ type: Input }],
    customMapboxApiUrl: [{ type: Input }],
    hash: [{ type: Input }],
    refreshExpiredTiles: [{ type: Input }],
    failIfMajorPerformanceCaveat: [{ type: Input }],
    classes: [{ type: Input }],
    bearingSnap: [{ type: Input }],
    interactive: [{ type: Input }],
    pitchWithRotate: [{ type: Input }],
    attributionControl: [{ type: Input }],
    logoPosition: [{ type: Input }],
    maxTileCacheSize: [{ type: Input }],
    localIdeographFontFamily: [{ type: Input }],
    preserveDrawingBuffer: [{ type: Input }],
    renderWorldCopies: [{ type: Input }],
    trackResize: [{ type: Input }],
    transformRequest: [{ type: Input }],
    minZoom: [{ type: Input }],
    maxZoom: [{ type: Input }],
    scrollZoom: [{ type: Input }],
    dragRotate: [{ type: Input }],
    touchZoomRotate: [{ type: Input }],
    doubleClickZoom: [{ type: Input }],
    keyboard: [{ type: Input }],
    dragPan: [{ type: Input }],
    boxZoom: [{ type: Input }],
    style: [{ type: Input }],
    center: [{ type: Input }],
    maxBounds: [{ type: Input }],
    zoom: [{ type: Input }],
    bearing: [{ type: Input }],
    pitch: [{ type: Input }],
    movingMethod: [{ type: Input }],
    movingOptions: [{ type: Input }],
    fitBounds: [{ type: Input }],
    fitBoundsOptions: [{ type: Input }],
    centerWithPanTo: [{ type: Input }],
    panToOptions: [{ type: Input }],
    cursorStyle: [{ type: Input }],
    resize: [{ type: Output }],
    remove: [{ type: Output }],
    mouseDown: [{ type: Output }],
    mouseUp: [{ type: Output }],
    mouseMove: [{ type: Output }],
    click: [{ type: Output }],
    dblClick: [{ type: Output }],
    mouseEnter: [{ type: Output }],
    mouseLeave: [{ type: Output }],
    mouseOver: [{ type: Output }],
    mouseOut: [{ type: Output }],
    contextMenu: [{ type: Output }],
    touchStart: [{ type: Output }],
    touchEnd: [{ type: Output }],
    touchMove: [{ type: Output }],
    touchCancel: [{ type: Output }],
    wheel: [{ type: Output }],
    moveStart: [{ type: Output }],
    move: [{ type: Output }],
    moveEnd: [{ type: Output }],
    dragStart: [{ type: Output }],
    drag: [{ type: Output }],
    dragEnd: [{ type: Output }],
    zoomStart: [{ type: Output }],
    zoomEvt: [{ type: Output }],
    zoomEnd: [{ type: Output }],
    rotateStart: [{ type: Output }],
    rotate: [{ type: Output }],
    rotateEnd: [{ type: Output }],
    pitchStart: [{ type: Output }],
    pitchEvt: [{ type: Output }],
    pitchEnd: [{ type: Output }],
    boxZoomStart: [{ type: Output }],
    boxZoomEnd: [{ type: Output }],
    boxZoomCancel: [{ type: Output }],
    webGlContextLost: [{ type: Output }],
    webGlContextRestored: [{ type: Output }],
    load: [{ type: Output }],
    render: [{ type: Output }],
    error: [{ type: Output }],
    data: [{ type: Output }],
    styleData: [{ type: Output }],
    sourceData: [{ type: Output }],
    dataLoading: [{ type: Output }],
    styleDataLoading: [{ type: Output }],
    sourceDataLoading: [{ type: Output }],
    mapContainer: [{ type: ViewChild, args: ['container',] }]
};
if (false) {
    /** @type {?} */
    MapComponent.prototype.accessToken;
    /** @type {?} */
    MapComponent.prototype.customMapboxApiUrl;
    /** @type {?} */
    MapComponent.prototype.hash;
    /** @type {?} */
    MapComponent.prototype.refreshExpiredTiles;
    /** @type {?} */
    MapComponent.prototype.failIfMajorPerformanceCaveat;
    /** @type {?} */
    MapComponent.prototype.classes;
    /** @type {?} */
    MapComponent.prototype.bearingSnap;
    /** @type {?} */
    MapComponent.prototype.interactive;
    /** @type {?} */
    MapComponent.prototype.pitchWithRotate;
    /** @type {?} */
    MapComponent.prototype.attributionControl;
    /** @type {?} */
    MapComponent.prototype.logoPosition;
    /** @type {?} */
    MapComponent.prototype.maxTileCacheSize;
    /** @type {?} */
    MapComponent.prototype.localIdeographFontFamily;
    /** @type {?} */
    MapComponent.prototype.preserveDrawingBuffer;
    /** @type {?} */
    MapComponent.prototype.renderWorldCopies;
    /** @type {?} */
    MapComponent.prototype.trackResize;
    /** @type {?} */
    MapComponent.prototype.transformRequest;
    /** @type {?} */
    MapComponent.prototype.minZoom;
    /** @type {?} */
    MapComponent.prototype.maxZoom;
    /** @type {?} */
    MapComponent.prototype.scrollZoom;
    /** @type {?} */
    MapComponent.prototype.dragRotate;
    /** @type {?} */
    MapComponent.prototype.touchZoomRotate;
    /** @type {?} */
    MapComponent.prototype.doubleClickZoom;
    /** @type {?} */
    MapComponent.prototype.keyboard;
    /** @type {?} */
    MapComponent.prototype.dragPan;
    /** @type {?} */
    MapComponent.prototype.boxZoom;
    /** @type {?} */
    MapComponent.prototype.style;
    /** @type {?} */
    MapComponent.prototype.center;
    /** @type {?} */
    MapComponent.prototype.maxBounds;
    /** @type {?} */
    MapComponent.prototype.zoom;
    /** @type {?} */
    MapComponent.prototype.bearing;
    /** @type {?} */
    MapComponent.prototype.pitch;
    /** @type {?} */
    MapComponent.prototype.movingMethod;
    /** @type {?} */
    MapComponent.prototype.movingOptions;
    /** @type {?} */
    MapComponent.prototype.fitBounds;
    /** @type {?} */
    MapComponent.prototype.fitBoundsOptions;
    /** @type {?} */
    MapComponent.prototype.centerWithPanTo;
    /** @type {?} */
    MapComponent.prototype.panToOptions;
    /** @type {?} */
    MapComponent.prototype.cursorStyle;
    /** @type {?} */
    MapComponent.prototype.resize;
    /** @type {?} */
    MapComponent.prototype.remove;
    /** @type {?} */
    MapComponent.prototype.mouseDown;
    /** @type {?} */
    MapComponent.prototype.mouseUp;
    /** @type {?} */
    MapComponent.prototype.mouseMove;
    /** @type {?} */
    MapComponent.prototype.click;
    /** @type {?} */
    MapComponent.prototype.dblClick;
    /** @type {?} */
    MapComponent.prototype.mouseEnter;
    /** @type {?} */
    MapComponent.prototype.mouseLeave;
    /** @type {?} */
    MapComponent.prototype.mouseOver;
    /** @type {?} */
    MapComponent.prototype.mouseOut;
    /** @type {?} */
    MapComponent.prototype.contextMenu;
    /** @type {?} */
    MapComponent.prototype.touchStart;
    /** @type {?} */
    MapComponent.prototype.touchEnd;
    /** @type {?} */
    MapComponent.prototype.touchMove;
    /** @type {?} */
    MapComponent.prototype.touchCancel;
    /** @type {?} */
    MapComponent.prototype.wheel;
    /** @type {?} */
    MapComponent.prototype.moveStart;
    /** @type {?} */
    MapComponent.prototype.move;
    /** @type {?} */
    MapComponent.prototype.moveEnd;
    /** @type {?} */
    MapComponent.prototype.dragStart;
    /** @type {?} */
    MapComponent.prototype.drag;
    /** @type {?} */
    MapComponent.prototype.dragEnd;
    /** @type {?} */
    MapComponent.prototype.zoomStart;
    /** @type {?} */
    MapComponent.prototype.zoomEvt;
    /** @type {?} */
    MapComponent.prototype.zoomEnd;
    /** @type {?} */
    MapComponent.prototype.rotateStart;
    /** @type {?} */
    MapComponent.prototype.rotate;
    /** @type {?} */
    MapComponent.prototype.rotateEnd;
    /** @type {?} */
    MapComponent.prototype.pitchStart;
    /** @type {?} */
    MapComponent.prototype.pitchEvt;
    /** @type {?} */
    MapComponent.prototype.pitchEnd;
    /** @type {?} */
    MapComponent.prototype.boxZoomStart;
    /** @type {?} */
    MapComponent.prototype.boxZoomEnd;
    /** @type {?} */
    MapComponent.prototype.boxZoomCancel;
    /** @type {?} */
    MapComponent.prototype.webGlContextLost;
    /** @type {?} */
    MapComponent.prototype.webGlContextRestored;
    /** @type {?} */
    MapComponent.prototype.load;
    /** @type {?} */
    MapComponent.prototype.render;
    /** @type {?} */
    MapComponent.prototype.error;
    /** @type {?} */
    MapComponent.prototype.data;
    /** @type {?} */
    MapComponent.prototype.styleData;
    /** @type {?} */
    MapComponent.prototype.sourceData;
    /** @type {?} */
    MapComponent.prototype.dataLoading;
    /** @type {?} */
    MapComponent.prototype.styleDataLoading;
    /** @type {?} */
    MapComponent.prototype.sourceDataLoading;
    /** @type {?} */
    MapComponent.prototype.mapContainer;
    /** @type {?} */
    MapComponent.prototype.MapService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJsaWIvbWFwL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFhQSxPQUFPLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBOEJ2QixNQUFNOzs7O0lBeUdKLFlBQ1U7UUFBQSxlQUFVLEdBQVYsVUFBVTs7NEJBcEVtQyxPQUFPO3NCQWMzQyxJQUFJLFlBQVksRUFBUTtzQkFDeEIsSUFBSSxZQUFZLEVBQVE7eUJBQ3JCLElBQUksWUFBWSxFQUFpQjt1QkFDbkMsSUFBSSxZQUFZLEVBQWlCO3lCQUMvQixJQUFJLFlBQVksRUFBaUI7cUJBQ3JDLElBQUksWUFBWSxFQUFpQjt3QkFDOUIsSUFBSSxZQUFZLEVBQWlCOzBCQUMvQixJQUFJLFlBQVksRUFBaUI7MEJBQ2pDLElBQUksWUFBWSxFQUFpQjt5QkFDbEMsSUFBSSxZQUFZLEVBQWlCO3dCQUNsQyxJQUFJLFlBQVksRUFBaUI7MkJBQzlCLElBQUksWUFBWSxFQUFpQjswQkFDbEMsSUFBSSxZQUFZLEVBQWlCO3dCQUNuQyxJQUFJLFlBQVksRUFBaUI7eUJBQ2hDLElBQUksWUFBWSxFQUFpQjsyQkFDL0IsSUFBSSxZQUFZLEVBQWlCO3FCQUN2QyxJQUFJLFlBQVksRUFBTzt5QkFDbkIsSUFBSSxZQUFZLEVBQWE7b0JBQ2xDLElBQUksWUFBWSxFQUFpQzt1QkFDOUMsSUFBSSxZQUFZLEVBQWE7eUJBQzNCLElBQUksWUFBWSxFQUFhO29CQUNsQyxJQUFJLFlBQVksRUFBaUM7dUJBQzlDLElBQUksWUFBWSxFQUFhO3lCQUMzQixJQUFJLFlBQVksRUFBaUM7dUJBQ25ELElB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QUFNO3FCQUNOLE1BQU07d0JBQ04sTUFBTTtzQkFDTixNQUFNO3dCQUNOLE1BQU07b0JBQ04sTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTt3QkFDTixNQUFNO3VCQUNOLE1BQU07MEJBQ04sTUFBTTt5QkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNO29CQUNOLE1BQU07d0JBQ04sTUFBTTttQkFDTixNQUFNO3NCQUNOLE1BQU07d0JBQ04sTUFBTTttQkFDTixNQUFNO3NCQUNOLE1BQU07d0JBQ04sTUFBTTtzQkFDTixNQUFNO3NCQUNOLE1BQU07MEJBQ04sTUFBTTtxQkFDTixNQUFNO3dCQUNOLE1BQU07eUJBQ04sTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNOzRCQUNOLE1BQU07K0JBQ04sTUFBTTttQ0FDTixNQUFNO21CQUNOLE1BQU07cUJBQ04sTUFBTTtvQkFDTixNQUFNO21CQUNOLE1BQU07d0JBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07K0JBQ04sTUFBTTtnQ0FDTixNQUFNOzJCQU1OLFNBQVMsU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW5pbWF0aW9uT3B0aW9ucyxcbiAgRXZlbnREYXRhLFxuICBMbmdMYXRCb3VuZHNMaWtlLFxuICBMbmdMYXRMaWtlLFxuICBNYXAsXG4gIE1hcEJveFpvb21FdmVudCxcbiAgTWFwTW91c2VFdmVudCxcbiAgTWFwVG91Y2hFdmVudCxcbiAgUGFkZGluZ09wdGlvbnMsXG4gIFBvaW50TGlrZSxcbiAgU3R5bGVcbiAgfSBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHsgTWFwU2VydmljZSwgTW92aW5nT3B0aW9ucyB9IGZyb20gJy4vbWFwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFwRXZlbnQgfSBmcm9tICcuL21hcC50eXBlcyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIG5hbWVzcGFjZSBtYXBib3hnbCB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBNYXBib3hPcHRpb25zIHtcbiAgICAgIGZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQ/OiBib29sZWFuO1xuICAgICAgdHJhbnNmb3JtUmVxdWVzdD86IEZ1bmN0aW9uO1xuICAgICAgbG9jYWxJZGVvZ3JhcGhGb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgcGl0Y2hXaXRoUm90YXRlPzogYm9vbGVhbjtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWdsLW1hcCcsXG4gIHRlbXBsYXRlOiAnPGRpdiAjY29udGFpbmVyPjwvZGl2PicsXG4gIHN0eWxlczogW2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNYXBTZXJ2aWNlXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBNYXBFdmVudCB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGFjY2Vzc1Rva2VuPzogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21NYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhhc2g/OiBib29sZWFuO1xuICBASW5wdXQoKSByZWZyZXNoRXhwaXJlZFRpbGVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZmFpbElmTWFqb3JQZXJmb3JtYW5jZUNhdmVhdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgYmVhcmluZ1NuYXA/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGludGVyYWN0aXZlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcGl0Y2hXaXRoUm90YXRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgYXR0cmlidXRpb25Db250cm9sPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9nb1Bvc2l0aW9uPzogJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuICBASW5wdXQoKSBtYXhUaWxlQ2FjaGVTaXplPzogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NhbElkZW9ncmFwaEZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXNlcnZlRHJhd2luZ0J1ZmZlcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlbmRlcldvcmxkQ29waWVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJhY2tSZXNpemU/OiBib29sZWFuO1xuICBASW5wdXQoKSB0cmFuc2Zvcm1SZXF1ZXN0PzogRnVuY3Rpb247XG5cbiAgLyogRHluYW1pYyBpbnB1dHMgKi9cbiAgQElucHV0KCkgbWluWm9vbT86IG51bWJlcjtcbiAgQElucHV0KCkgbWF4Wm9vbT86IG51bWJlcjtcbiAgQElucHV0KCkgc2Nyb2xsWm9vbT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyYWdSb3RhdGU/OiBib29sZWFuO1xuICBASW5wdXQoKSB0b3VjaFpvb21Sb3RhdGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkb3VibGVDbGlja1pvb20/OiBib29sZWFuO1xuICBASW5wdXQoKSBrZXlib2FyZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyYWdQYW4/OiBib29sZWFuO1xuICBASW5wdXQoKSBib3hab29tPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3R5bGU6IFN0eWxlIHwgc3RyaW5nO1xuICBASW5wdXQoKSBjZW50ZXI/OiBMbmdMYXRMaWtlO1xuICBASW5wdXQoKSBtYXhCb3VuZHM/OiBMbmdMYXRCb3VuZHNMaWtlO1xuICBASW5wdXQoKSB6b29tPzogW251bWJlcl07XG4gIEBJbnB1dCgpIGJlYXJpbmc/OiBbbnVtYmVyXTtcbiAgQElucHV0KCkgcGl0Y2g/OiBbbnVtYmVyXTtcblxuICAvKiBBZGRlZCBieSBuZ3gtbWFwYm94LWdsICovXG4gIEBJbnB1dCgpIG1vdmluZ01ldGhvZDogJ2p1bXBUbycgfCAnZWFzZVRvJyB8ICdmbHlUbycgPSAnZmx5VG8nO1xuICBASW5wdXQoKSBtb3ZpbmdPcHRpb25zPzogTW92aW5nT3B0aW9ucztcbiAgQElucHV0KCkgZml0Qm91bmRzPzogTG5nTGF0Qm91bmRzTGlrZTtcbiAgQElucHV0KCkgZml0Qm91bmRzT3B0aW9ucz86IHtcbiAgICBsaW5lYXI/OiBib29sZWFuLFxuICAgIGVhc2luZz86IEZ1bmN0aW9uLFxuICAgIHBhZGRpbmc/OiBudW1iZXIgfCBQYWRkaW5nT3B0aW9ucyxcbiAgICBvZmZzZXQ/OiBQb2ludExpa2UsXG4gICAgbWF4Wm9vbT86IG51bWJlclxuICB9O1xuICBASW5wdXQoKSBjZW50ZXJXaXRoUGFuVG8/OiBib29sZWFuO1xuICBASW5wdXQoKSBwYW5Ub09wdGlvbnM/OiBBbmltYXRpb25PcHRpb25zO1xuICBASW5wdXQoKSBjdXJzb3JTdHlsZT86IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIG1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgY29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50PigpO1xuICBAT3V0cHV0KCkgdG91Y2hFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaE1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB0b3VjaENhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudD4oKTtcbiAgQE91dHB1dCgpIHdoZWVsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7IC8vIFRPRE8gTWFwV2hlZWxFdmVudFxuICBAT3V0cHV0KCkgbW92ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7IC8vIFRPRE8gQ2hlY2sgdHlwZVxuICBAT3V0cHV0KCkgbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBtb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0V2ZW50PigpO1xuICBAT3V0cHV0KCkgem9vbVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHpvb21FdnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgem9vbUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByb3RhdGVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwVG91Y2hFdmVudCB8IE1hcE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByb3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcFRvdWNoRXZlbnQgfCBNYXBNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcm90YXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBUb3VjaEV2ZW50IHwgTWFwTW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHBpdGNoU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHBpdGNoRXZ0ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG4gIEBPdXRwdXQoKSBwaXRjaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgYm94Wm9vbVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCb3hab29tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBib3hab29tRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCb3hab29tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBib3hab29tQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCb3hab29tRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSB3ZWJHbENvbnRleHRMb3N0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgd2ViR2xDb250ZXh0UmVzdG9yZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpOyAvLyBUT0RPIENoZWNrIHR5cGVcbiAgQE91dHB1dCgpIGRhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHN0eWxlRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgc291cmNlRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnREYXRhPigpO1xuICBAT3V0cHV0KCkgZGF0YUxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHN0eWxlRGF0YUxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RGF0YT4oKTtcbiAgQE91dHB1dCgpIHNvdXJjZURhdGFMb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudERhdGE+KCk7XG5cbiAgZ2V0IG1hcEluc3RhbmNlKCk6IE1hcCB7XG4gICAgcmV0dXJuIHRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIG1hcENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIE1hcFNlcnZpY2U6IE1hcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5NYXBTZXJ2aWNlLnNldHVwKHtcbiAgICAgIGFjY2Vzc1Rva2VuOiB0aGlzLmFjY2Vzc1Rva2VuLFxuICAgICAgY3VzdG9tTWFwYm94QXBpVXJsOiB0aGlzLmN1c3RvbU1hcGJveEFwaVVybCxcbiAgICAgIG1hcE9wdGlvbnM6IHtcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLm1hcENvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgICBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGUsXG4gICAgICAgIGhhc2g6IHRoaXMuaGFzaCxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRoaXMuaW50ZXJhY3RpdmUsXG4gICAgICAgIGJlYXJpbmdTbmFwOiB0aGlzLmJlYXJpbmdTbmFwLFxuICAgICAgICBwaXRjaFdpdGhSb3RhdGU6IHRoaXMucGl0Y2hXaXRoUm90YXRlLFxuICAgICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogdGhpcy5hdHRyaWJ1dGlvbkNvbnRyb2wsXG4gICAgICAgIGxvZ29Qb3NpdGlvbjogdGhpcy5sb2dvUG9zaXRpb24sXG4gICAgICAgIGZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQ6IHRoaXMuZmFpbElmTWFqb3JQZXJmb3JtYW5jZUNhdmVhdCxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0aGlzLnByZXNlcnZlRHJhd2luZ0J1ZmZlcixcbiAgICAgICAgcmVmcmVzaEV4cGlyZWRUaWxlczogdGhpcy5yZWZyZXNoRXhwaXJlZFRpbGVzLFxuICAgICAgICBtYXhCb3VuZHM6IHRoaXMubWF4Qm91bmRzLFxuICAgICAgICBzY3JvbGxab29tOiB0aGlzLnNjcm9sbFpvb20sXG4gICAgICAgIGJveFpvb206IHRoaXMuYm94Wm9vbSxcbiAgICAgICAgZHJhZ1JvdGF0ZTogdGhpcy5kcmFnUm90YXRlLFxuICAgICAgICBkcmFnUGFuOiB0aGlzLmRyYWdQYW4sXG4gICAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkLFxuICAgICAgICBkb3VibGVDbGlja1pvb206IHRoaXMuZG91YmxlQ2xpY2tab29tLFxuICAgICAgICB0b3VjaFpvb21Sb3RhdGU6IHRoaXMudG91Y2hab29tUm90YXRlLFxuICAgICAgICB0cmFja1Jlc2l6ZTogdGhpcy50cmFja1Jlc2l6ZSxcbiAgICAgICAgY2VudGVyOiB0aGlzLmNlbnRlcixcbiAgICAgICAgem9vbTogdGhpcy56b29tLFxuICAgICAgICBiZWFyaW5nOiB0aGlzLmJlYXJpbmcsXG4gICAgICAgIHBpdGNoOiB0aGlzLnBpdGNoLFxuICAgICAgICByZW5kZXJXb3JsZENvcGllczogdGhpcy5yZW5kZXJXb3JsZENvcGllcyxcbiAgICAgICAgbWF4VGlsZUNhY2hlU2l6ZTogdGhpcy5tYXhUaWxlQ2FjaGVTaXplLFxuICAgICAgICBsb2NhbElkZW9ncmFwaEZvbnRGYW1pbHk6IHRoaXMubG9jYWxJZGVvZ3JhcGhGb250RmFtaWx5LFxuICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiB0aGlzLnRyYW5zZm9ybVJlcXVlc3RcbiAgICAgIH0sXG4gICAgICBtYXBFdmVudHM6IHRoaXNcbiAgICB9KTtcbiAgICBpZiAodGhpcy5jdXJzb3JTdHlsZSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLmNoYW5nZUNhbnZhc0N1cnNvcih0aGlzLmN1cnNvclN0eWxlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLk1hcFNlcnZpY2UuZGVzdHJveU1hcCgpO1xuICB9XG5cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGF3YWl0IHRoaXMuTWFwU2VydmljZS5tYXBDcmVhdGVkJC50b1Byb21pc2UoKTtcbiAgICBpZiAoY2hhbmdlcy5jdXJzb3JTdHlsZSAmJiAhY2hhbmdlcy5jdXJzb3JTdHlsZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5jaGFuZ2VDYW52YXNDdXJzb3IoY2hhbmdlcy5jdXJzb3JTdHlsZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5taW5ab29tICYmICFjaGFuZ2VzLm1pblpvb20uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlTWluWm9vbShjaGFuZ2VzLm1pblpvb20uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubWF4Wm9vbSAmJiAhY2hhbmdlcy5tYXhab29tLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZU1heFpvb20oY2hhbmdlcy5tYXhab29tLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjcm9sbFpvb20gJiYgIWNoYW5nZXMuc2Nyb2xsWm9vbS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVTY3JvbGxab29tKGNoYW5nZXMuc2Nyb2xsWm9vbS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kcmFnUm90YXRlICYmICFjaGFuZ2VzLmRyYWdSb3RhdGUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRHJhZ1JvdGF0ZShjaGFuZ2VzLmRyYWdSb3RhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudG91Y2hab29tUm90YXRlICYmICFjaGFuZ2VzLnRvdWNoWm9vbVJvdGF0ZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVUb3VjaFpvb21Sb3RhdGUoY2hhbmdlcy50b3VjaFpvb21Sb3RhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZG91YmxlQ2xpY2tab29tICYmICFjaGFuZ2VzLmRvdWJsZUNsaWNrWm9vbS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVEb3VibGVDbGlja1pvb20oY2hhbmdlcy5kb3VibGVDbGlja1pvb20uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMua2V5Ym9hcmQgJiYgIWNoYW5nZXMua2V5Ym9hcmQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlS2V5Ym9hcmQoY2hhbmdlcy5rZXlib2FyZC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kcmFnUGFuICYmICFjaGFuZ2VzLmRyYWdQYW4uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UudXBkYXRlRHJhZ1BhbihjaGFuZ2VzLmRyYWdQYW4uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuYm94Wm9vbSAmJiAhY2hhbmdlcy5ib3hab29tLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZUJveFpvb20oY2hhbmdlcy5ib3hab29tLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnN0eWxlICYmICFjaGFuZ2VzLnN0eWxlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnVwZGF0ZVN0eWxlKGNoYW5nZXMuc3R5bGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubWF4Qm91bmRzICYmICFjaGFuZ2VzLm1heEJvdW5kcy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS51cGRhdGVNYXhCb3VuZHMoY2hhbmdlcy5tYXhCb3VuZHMuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZml0Qm91bmRzICYmICFjaGFuZ2VzLmZpdEJvdW5kcy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5maXRCb3VuZHMoY2hhbmdlcy5maXRCb3VuZHMuY3VycmVudFZhbHVlLCB0aGlzLmZpdEJvdW5kc09wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLmNlbnRlcldpdGhQYW5UbyAmJlxuICAgICAgY2hhbmdlcy5jZW50ZXIgJiYgIWNoYW5nZXMuY2VudGVyLmlzRmlyc3RDaGFuZ2UoKSAmJlxuICAgICAgIWNoYW5nZXMuem9vbSAmJiAhY2hhbmdlcy5iZWFyaW5nICYmICFjaGFuZ2VzLnBpdGNoXG4gICAgKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2UucGFuVG8odGhpcy5jZW50ZXIhLCB0aGlzLnBhblRvT3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGNoYW5nZXMuY2VudGVyICYmICFjaGFuZ2VzLmNlbnRlci5pc0ZpcnN0Q2hhbmdlKCkgfHxcbiAgICAgIGNoYW5nZXMuem9vbSAmJiAhY2hhbmdlcy56b29tLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5iZWFyaW5nICYmICFjaGFuZ2VzLmJlYXJpbmcuaXNGaXJzdENoYW5nZSgpIHx8XG4gICAgICBjaGFuZ2VzLnBpdGNoICYmICFjaGFuZ2VzLnBpdGNoLmlzRmlyc3RDaGFuZ2UoKVxuICAgICkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLm1vdmUoXG4gICAgICAgIHRoaXMubW92aW5nTWV0aG9kLFxuICAgICAgICB0aGlzLm1vdmluZ09wdGlvbnMsXG4gICAgICAgIGNoYW5nZXMuem9vbSAmJiB0aGlzLnpvb20gPyB0aGlzLnpvb21bMF0gOiB1bmRlZmluZWQsXG4gICAgICAgIGNoYW5nZXMuY2VudGVyID8gdGhpcy5jZW50ZXIgOiB1bmRlZmluZWQsXG4gICAgICAgIGNoYW5nZXMuYmVhcmluZyAmJiB0aGlzLmJlYXJpbmcgPyB0aGlzLmJlYXJpbmdbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgIGNoYW5nZXMucGl0Y2ggJiYgdGhpcy5waXRjaCA/IHRoaXMucGl0Y2hbMF0gOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=