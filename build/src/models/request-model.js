var RequestModel = /** @class */ (function () {
    function RequestModel(data) {
        if (data === void 0) { data = {}; }
        this._method = data.method || null;
        this._data = data.data || null;
        this._date = data.date || null;
        this._clientId = data.clientId || null;
        this._id = data.id || null;
    }
    Object.defineProperty(RequestModel.prototype, "method", {
        get: function () {
            return this._method;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestModel.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestModel.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestModel.prototype, "clientId", {
        get: function () {
            return this._clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return RequestModel;
}());
export default RequestModel;
//# sourceMappingURL=request-model.js.map