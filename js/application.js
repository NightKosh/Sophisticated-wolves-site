var app = angular.module("app", ['youtube-embed', 'bootstrapLightbox', 'nk-gallery']);

app.service('PageService', function () {
    var DEFAULT_PARAMS = {
        page: "download",
        lang: "en"
    };

    var getJsonFromUrl = function () {
        var result = {};
        var query = location.search.substr(1);
        query.split("&").forEach(function (part) {
            var item = part.split("=");
            if (item[0] && item[1]) {
                result[item[0]] = decodeURIComponent(item[1]);
            }
        });

        for (var key in DEFAULT_PARAMS) {
            if (!result.hasOwnProperty(key)) {
                result[key] = DEFAULT_PARAMS[key];
            }
        }
        return result;
    };
    var pageParams = getJsonFromUrl();

    this.getLinkWithLangParams = function (link) {
        if (pageParams.lang != DEFAULT_PARAMS.lang) {
            link += (link.indexOf("?") == -1) ? "?" : "&";
            link += "lang=" + pageParams.lang;
        }
        return link;
    };

    this.getPageParams = function () {
        return pageParams;
    };

    this.getNewLocalizedLinkByParams = function (lang) {
        var str = "";
        var paramNum = 0;
        for (var key in pageParams) {
            if (pageParams.hasOwnProperty(key)) {
                if (key != "lang" && !(key == "page" && pageParams[key] == DEFAULT_PARAMS.page)) {
                    if (paramNum != 0) {
                        str += "&";
                    }
                    str += key + "=" + pageParams[key];
                    paramNum++;
                }
            }
        }
        if (lang != DEFAULT_PARAMS.lang) {
            if (str.length != 0) {
                str += "&";
            }
            str += "lang=" + lang;
        }
        return (str.length != 0) ? "/?" + str : "/";
    };

    this.getTemplatePath = function () {
        return "template/" +
            ((pageParams.page) ? pageParams.page : DEFAULT_PARAMS.page) +
            "/" +
            ((pageParams.sub_page) ? pageParams.sub_page : "index") +
            ".html";
    };

    this.getSubMenuTemplatePath = function () {
        return "template/" +
            ((pageParams.page) ? pageParams.page : DEFAULT_PARAMS.page) +
            "/submenu.html";
    };

    this.getDataPath = function () {
        return "data/" +
            ((pageParams.page) ? pageParams.page : DEFAULT_PARAMS.page) +
            "/" +
            ((pageParams.sub_page) ? pageParams.sub_page + "_" : "") +
            pageParams.lang + ".json";
    };

    this.getSubMenuDataPath = function () {
        return "data/" +
            ((pageParams.page) ? pageParams.page : DEFAULT_PARAMS.page) +
            "/submenu_" + pageParams.lang + ".json";
    };
});

app.config(function (LightboxProvider) {
    LightboxProvider.templateUrl = 'template/libs/lightbox.html';
});

