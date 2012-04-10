/*
 * Copyright 2000-2012 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created with IntelliJ IDEA.
 * User: Natalia.Ukhorskaya
 * Date: 3/30/12
 * Time: 3:37 PM
 * To change this template use File | Settings | File Templates.
 */


var RefreshButtonView = (function () {

    var eventHandler = new EventsHandler();

    function RefreshButtonView() {

        var instance = {
            addListener: function (name, f) {
                eventHandler.addListener(name, f);
            },
            fire: function (name, param) {
                eventHandler.fire(name, param);
            }
        };

        if (navigator.appVersion.indexOf("Mac") != -1) {
            var title = $("#refresh").attr("title").replace("F9", "R");
            $("#refresh").attr("title", title);
        }

        $("#refresh").click(function () {
            eventHandler.fire("get_highlighting");
        });


        return instance;
    }


    return RefreshButtonView;
})();