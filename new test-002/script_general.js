(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"scrollBarMargin":2,"hash": "6e4a2a6abc7563aaeeb4ceba676f8147956bf0f18496e3a1fce6a57aad5436fa", "definitions": [{"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"minHeight":50,"playbackBarBottom":5,"minWidth":100,"progressBackgroundColorRatios":[0],"progressRight":"33%","subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","propagateClick":false,"data":{"name":"Main Viewer"},"progressBarBorderColor":"#000000","toolTipPaddingTop":4,"playbackBarHeight":10,"progressOpacity":0.7,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"toolTipBorderColor":"#767676","subtitlesTextShadowVerticalLength":1,"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"playbackBarRight":0,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarHeadShadowOpacity":0.7,"progressHeight":2,"toolTipFontColor":"#606060","progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"progressBarBorderRadius":2,"playbackBarProgressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesBottom":50,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowColor":"#333138","class":"ViewerArea","progressBorderRadius":2,"playbackBarHeadBorderRadius":0,"id":"MainViewer","vrPointerSelectionTime":2000,"playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":6,"playbackBarBorderSize":0,"progressLeft":"33%","vrPointerSelectionColor":"#FF6600","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingBottom":4,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"toolTipFontSize":"1.11vmin","toolTipPaddingRight":6,"playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"width":"100%","toolTipFontFamily":"Arial","height":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"surfaceReticleSelectionColor":"#FFFFFF"},{"frames":[{"thumbnailUrl":"media/panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"url":"media/panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849_0/{face}/0/{row}_{column}.webp","height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"url":"media/panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849_0/{face}/1/{row}_{column}.webp","height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849_t.webp","label":trans('panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849.label'),"hfovMin":"150%","class":"Panorama","hfovMax":130,"id":"panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849","overlays":["this.overlay_76DEC60C_7927_C6AD_41D7_E5B74E31F18E"],"data":{"label":"a1_View01"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_76DEC60C_7927_C6AD_41D7_E5B74E31F18E"},"class":"AdjacentPanorama","yaw":-4.08,"distance":6.41,"select":"this.overlay_76DEC60C_7927_C6AD_41D7_E5B74E31F18E.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-170,"panorama":"this.panorama_7612B784_792D_C59D_41D6_0390F0D4E62D"}],"hfov":360,"vfov":180},{"class":"PanoramaCamera","initialSequence":"this.sequence_767B34D7_793C_DBBB_41D6_CED87D327451","enterPointingToHorizon":true,"id":"panorama_6963D20E_793C_DEAC_41BF_DD3836902855_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"class":"PanoramaCamera","initialSequence":"this.sequence_7668768C_7923_C7AD_4160_93FAD93ED186","enterPointingToHorizon":true,"id":"panorama_69556376_7923_DD7D_41D1_419FABDB9B67_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"frames":[{"thumbnailUrl":"media/panorama_7612B784_792D_C59D_41D6_0390F0D4E62D_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"url":"media/panorama_7612B784_792D_C59D_41D6_0390F0D4E62D_0/{face}/0/{row}_{column}.webp","height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"url":"media/panorama_7612B784_792D_C59D_41D6_0390F0D4E62D_0/{face}/1/{row}_{column}.webp","height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_7612B784_792D_C59D_41D6_0390F0D4E62D_t.webp","label":trans('panorama_7612B784_792D_C59D_41D6_0390F0D4E62D.label'),"hfovMin":"150%","class":"Panorama","hfovMax":130,"id":"panorama_7612B784_792D_C59D_41D6_0390F0D4E62D","overlays":["this.overlay_6954E97D_7925_4D6C_4178_147E0670EBE6","this.overlay_691B75EC_7923_C56D_41DA_11FAF0FC915D"],"data":{"label":"a1_View02"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_691B75EC_7923_C56D_41DA_11FAF0FC915D"},"class":"AdjacentPanorama","yaw":-7.76,"distance":6.93,"select":"this.overlay_691B75EC_7923_C56D_41DA_11FAF0FC915D.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-171.58,"panorama":"this.panorama_69556376_7923_DD7D_41D1_419FABDB9B67"},{"data":{"overlayID":"overlay_6954E97D_7925_4D6C_4178_147E0670EBE6"},"class":"AdjacentPanorama","yaw":-170,"distance":4.68,"select":"this.overlay_6954E97D_7925_4D6C_4178_147E0670EBE6.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-4.08,"panorama":"this.panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849"}],"hfov":360,"vfov":180},{"class":"PanoramaCamera","initialSequence":"this.sequence_77F1FBAE_792F_4DED_41B7_5775F7FE9B3A","enterPointingToHorizon":true,"id":"panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"frames":[{"thumbnailUrl":"media/panorama_69556376_7923_DD7D_41D1_419FABDB9B67_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"url":"media/panorama_69556376_7923_DD7D_41D1_419FABDB9B67_0/{face}/0/{row}_{column}.webp","height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"url":"media/panorama_69556376_7923_DD7D_41D1_419FABDB9B67_0/{face}/1/{row}_{column}.webp","height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_69556376_7923_DD7D_41D1_419FABDB9B67_t.webp","label":trans('panorama_69556376_7923_DD7D_41D1_419FABDB9B67.label'),"hfovMin":"150%","class":"Panorama","hfovMax":130,"id":"panorama_69556376_7923_DD7D_41D1_419FABDB9B67","overlays":["this.overlay_69F99E90_792C_C7B5_41B0_0138382736D8","this.overlay_699C27A3_792D_C59B_41B5_BA7938833E9A"],"data":{"label":"a1_View03"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_699C27A3_792D_C59B_41B5_BA7938833E9A"},"class":"AdjacentPanorama","yaw":-11.78,"distance":5.45,"select":"this.overlay_699C27A3_792D_C59B_41B5_BA7938833E9A.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-122.14,"panorama":"this.panorama_6963D20E_793C_DEAC_41BF_DD3836902855"},{"data":{"overlayID":"overlay_69F99E90_792C_C7B5_41B0_0138382736D8"},"class":"AdjacentPanorama","yaw":-171.58,"distance":3.67,"select":"this.overlay_69F99E90_792C_C7B5_41B0_0138382736D8.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-7.76,"panorama":"this.panorama_7612B784_792D_C59D_41D6_0390F0D4E62D"}],"hfov":360,"vfov":180},{"touchControlMode":"drag_rotation","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer"},{"items":[{"camera":"this.panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849_camera","class":"PanoramaPlayListItem","media":"this.panorama_760E3892_792F_4BB5_41C0_1EEA94BB6849","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_7612B784_792D_C59D_41D6_0390F0D4E62D_camera","class":"PanoramaPlayListItem","media":"this.panorama_7612B784_792D_C59D_41D6_0390F0D4E62D","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_69556376_7923_DD7D_41D1_419FABDB9B67_camera","class":"PanoramaPlayListItem","media":"this.panorama_69556376_7923_DD7D_41D1_419FABDB9B67","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_6963D20E_793C_DEAC_41BF_DD3836902855_camera","class":"PanoramaPlayListItem","media":"this.panorama_6963D20E_793C_DEAC_41BF_DD3836902855","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"class":"PlayList","id":"mainPlayList"},{"frames":[{"thumbnailUrl":"media/panorama_6963D20E_793C_DEAC_41BF_DD3836902855_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"url":"media/panorama_6963D20E_793C_DEAC_41BF_DD3836902855_0/{face}/0/{row}_{column}.webp","height":1024,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12},{"width":3072,"url":"media/panorama_6963D20E_793C_DEAC_41BF_DD3836902855_0/{face}/1/{row}_{column}.webp","height":512,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_6963D20E_793C_DEAC_41BF_DD3836902855_t.webp","label":trans('panorama_6963D20E_793C_DEAC_41BF_DD3836902855.label'),"hfovMin":"150%","class":"Panorama","hfovMax":130,"id":"panorama_6963D20E_793C_DEAC_41BF_DD3836902855","overlays":["this.overlay_690B5A91_792C_CFB7_41DA_698A0F54C9C1"],"data":{"label":"a1_View04"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_690B5A91_792C_CFB7_41DA_698A0F54C9C1"},"class":"AdjacentPanorama","yaw":-122.14,"distance":2.37,"select":"this.overlay_690B5A91_792C_CFB7_41DA_698A0F54C9C1.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-11.78,"panorama":"this.panorama_69556376_7923_DD7D_41D1_419FABDB9B67"}],"hfov":360,"vfov":180},{"class":"PanoramaCamera","initialSequence":"this.sequence_77F5FA2A_792D_CE95_41D6_68BDB9374739","enterPointingToHorizon":true,"id":"panorama_7612B784_792D_C59D_41D6_0390F0D4E62D_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"data":{"hasPanoramaAction":true,"label":"Отиване къмA1_view02"},"items":[{"pitch":-14.85,"hfov":10.5,"yaw":-4.08,"data":{"label":"\u041e\u0442\u0438\u0432\u0430\u043d\u0435 \u043a\u044a\u043cA1_view02"},"distance":100,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_BFFD4043_BE76_805D_41E0_60FAD0784860","scaleMode":"fit_inside","vfov":8.84}],"areas":["this.HotspotPanoramaOverlayArea_6919B620_7927_C695_41DD_D605B28B81F9"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"id":"overlay_76DEC60C_7927_C6AD_41D7_E5B74E31F18E","enabledInCardboard":true},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_767B34D7_793C_DBBB_41D6_CED87D327451"},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_7668768C_7923_C7AD_4160_93FAD93ED186"},{"data":{"hasPanoramaAction":true,"label":"Отиване къмA1_view01"},"items":[{"pitch":-19.94,"hfov":10.5,"yaw":-170,"data":{"label":"\u041e\u0442\u0438\u0432\u0430\u043d\u0435 \u043a\u044a\u043cA1_view01"},"distance":100,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_BFFD3043_BE76_805D_41DA_65E058491086","scaleMode":"fit_inside","vfov":8.84}],"areas":["this.HotspotPanoramaOverlayArea_695DB982_7925_4D94_41D8_14863B1B2A51"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"id":"overlay_6954E97D_7925_4D6C_4178_147E0670EBE6","enabledInCardboard":true},{"data":{"hasPanoramaAction":true,"label":"Отиване къмA1_view03"},"items":[{"pitch":-13.77,"hfov":10.5,"yaw":-7.76,"data":{"label":"\u041e\u0442\u0438\u0432\u0430\u043d\u0435 \u043a\u044a\u043cA1_view03"},"distance":100,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_BFFCE043_BE76_805D_41BF_AA30CFD11B66","scaleMode":"fit_inside","vfov":8.84}],"areas":["this.HotspotPanoramaOverlayArea_6901A5F0_7923_C575_41BE_67D1DB367DFD"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"id":"overlay_691B75EC_7923_C56D_41DA_11FAF0FC915D","enabledInCardboard":true},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_77F1FBAE_792F_4DED_41B7_5775F7FE9B3A"},{"data":{"hasPanoramaAction":true,"label":"Отиване къмA1_view02"},"items":[{"pitch":-24.82,"hfov":10.5,"yaw":-171.58,"data":{"label":"\u041e\u0442\u0438\u0432\u0430\u043d\u0435 \u043a\u044a\u043cA1_view02"},"distance":100,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_BFFCA043_BE76_805D_41B0_13BB4FFB983D","scaleMode":"fit_inside","vfov":8.84}],"areas":["this.HotspotPanoramaOverlayArea_69F2CEA6_792C_C79D_41CB_DE2843A9EBAF"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"id":"overlay_69F99E90_792C_C7B5_41B0_0138382736D8","enabledInCardboard":true},{"data":{"hasPanoramaAction":true,"label":"Отиване къмA1_view04"},"items":[{"pitch":-17.31,"hfov":10.5,"yaw":-11.78,"data":{"label":"\u041e\u0442\u0438\u0432\u0430\u043d\u0435 \u043a\u044a\u043cA1_view04"},"distance":100,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_BFFC9043_BE76_805D_41DD_C16A32C5E433","scaleMode":"fit_inside","vfov":8.84}],"areas":["this.HotspotPanoramaOverlayArea_699D47A7_792D_C59B_41A6_1F562EDB26F3"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"id":"overlay_699C27A3_792D_C59B_41B5_BA7938833E9A","enabledInCardboard":true},{"data":{"hasPanoramaAction":true,"label":"Отиване къмA1_view03"},"items":[{"pitch":-35.62,"hfov":10.5,"yaw":-122.14,"data":{"label":"\u041e\u0442\u0438\u0432\u0430\u043d\u0435 \u043a\u044a\u043cA1_view03"},"distance":100,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_BFFC5043_BE76_805D_41D1_3B1F26579D27","scaleMode":"fit_inside","vfov":8.84}],"areas":["this.HotspotPanoramaOverlayArea_69010A96_792C_CFBD_41D5_41880713CF49"],"class":"HotspotPanoramaOverlay","maps":[],"useHandCursor":true,"id":"overlay_690B5A91_792C_CFB7_41DA_698A0F54C9C1","enabledInCardboard":true},{"movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_77F5FA2A_792D_CE95_41D6_68BDB9374739"},{"levels":[{"width":312,"url":"media/res_69420F3D_7925_46EF_41A2_8B63AF07120C_0.webp","height":396,"class":"ImageResourceLevel"}],"rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","frameCount":24,"id":"AnimatedImageResource_BFFD4043_BE76_805D_41E0_60FAD0784860"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6919B620_7927_C695_41DD_D605B28B81F9","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":312,"url":"media/res_69420F3D_7925_46EF_41A2_8B63AF07120C_0.webp","height":396,"class":"ImageResourceLevel"}],"rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","frameCount":24,"id":"AnimatedImageResource_BFFD3043_BE76_805D_41DA_65E058491086"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_695DB982_7925_4D94_41D8_14863B1B2A51","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":312,"url":"media/res_69420F3D_7925_46EF_41A2_8B63AF07120C_0.webp","height":396,"class":"ImageResourceLevel"}],"rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","frameCount":24,"id":"AnimatedImageResource_BFFCE043_BE76_805D_41BF_AA30CFD11B66"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6901A5F0_7923_C575_41BE_67D1DB367DFD","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":312,"url":"media/res_69420F3D_7925_46EF_41A2_8B63AF07120C_0.webp","height":396,"class":"ImageResourceLevel"}],"rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","frameCount":24,"id":"AnimatedImageResource_BFFCA043_BE76_805D_41B0_13BB4FFB983D"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_69F2CEA6_792C_C79D_41CB_DE2843A9EBAF","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":312,"url":"media/res_69420F3D_7925_46EF_41A2_8B63AF07120C_0.webp","height":396,"class":"ImageResourceLevel"}],"rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","frameCount":24,"id":"AnimatedImageResource_BFFC9043_BE76_805D_41DD_C16A32C5E433"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_699D47A7_792D_C59B_41A6_1F562EDB26F3","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":312,"url":"media/res_69420F3D_7925_46EF_41A2_8B63AF07120C_0.webp","height":396,"class":"ImageResourceLevel"}],"rowCount":6,"frameDuration":41,"finalFrame":"first","colCount":4,"class":"AnimatedImageResource","frameCount":24,"id":"AnimatedImageResource_BFFC5043_BE76_805D_41D1_3B1F26579D27"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_69010A96_792C_CFBD_41D5_41880713CF49","mapColor":"any","displayTooltipInTouchScreens":true}],"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"class":"Player","minWidth":0,"id":"rootPlayer","propagateClick":false,"data":{"history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player3812","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"gap":10,"scrollBarColor":"#000000","width":"100%","start":"this.init()","height":"100%","backgroundColorRatios":[0],"layout":"absolute","scripts":{"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setLocale":TDV.Tour.Script.setLocale,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"clone":TDV.Tour.Script.clone,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"enableVR":TDV.Tour.Script.enableVR,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlays":TDV.Tour.Script.getOverlays,"quizFinish":TDV.Tour.Script.quizFinish,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPixels":TDV.Tour.Script.getPixels,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"downloadFile":TDV.Tour.Script.downloadFile,"openLink":TDV.Tour.Script.openLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setValue":TDV.Tour.Script.setValue,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showWindow":TDV.Tour.Script.showWindow,"init":TDV.Tour.Script.init,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupImage":TDV.Tour.Script.showPopupImage,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"unregisterKey":TDV.Tour.Script.unregisterKey,"mixObject":TDV.Tour.Script.mixObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"initAnalytics":TDV.Tour.Script.initAnalytics,"registerKey":TDV.Tour.Script.registerKey,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"shareSocial":TDV.Tour.Script.shareSocial,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"toggleVR":TDV.Tour.Script.toggleVR,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"disableVR":TDV.Tour.Script.disableVR,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaByName":TDV.Tour.Script.getMediaByName,"cloneBindings":TDV.Tour.Script.cloneBindings,"translate":TDV.Tour.Script.translate,"getKey":TDV.Tour.Script.getKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"createTween":TDV.Tour.Script.createTween,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.11, Fri Jun 27 2025