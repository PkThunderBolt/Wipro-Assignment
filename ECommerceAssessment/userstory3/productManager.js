// -----------------------------------------------
// User Story 3 – Product Management Module
// Using modern (TS 5+) decorators
// -----------------------------------------------
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Enum for Product Categories
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Fashion"] = "Fashion";
    Category["Grocery"] = "Grocery";
    Category["Home"] = "Home";
    Category["Sports"] = "Sports";
})(Category || (Category = {}));
// Modern Decorator (TS 5+)
// Accepts a method context rather than descriptor
function LogChange(value, context) {
    // Get the original method
    var methodName = String(context.name);
    // Return a new function that wraps the original
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var newValue = args[0];
        console.log("LOG: Method \"".concat(methodName, "\" called with value ").concat(newValue, " for Product ID ").concat(this.id));
        return value.apply(this, args);
    };
}
// Product Class implementing IProduct
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _updatePrice_decorators;
    var _updateStock_decorators;
    return _a = /** @class */ (function () {
            function Product(id, name, category, price, stock) {
                this.id = (__runInitializers(this, _instanceExtraInitializers), id);
                this.name = name;
                this.category = category;
                this.price = price;
                this.stock = stock;
            }
            // Decorators now just reference the function (no parentheses)
            Product.prototype.updatePrice = function (newPrice) {
                this.price = newPrice;
            };
            Product.prototype.updateStock = function (newStock) {
                this.stock = newStock;
            };
            Product.prototype.display = function () {
                console.log("ID: ".concat(this.id, " | ").concat(this.name, " | ").concat(this.category, " | \u20B9").concat(this.price, " | Stock: ").concat(this.stock));
            };
            return Product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _updatePrice_decorators = [LogChange];
            _updateStock_decorators = [LogChange];
            __esDecorate(_a, null, _updatePrice_decorators, { kind: "method", name: "updatePrice", static: false, private: false, access: { has: function (obj) { return "updatePrice" in obj; }, get: function (obj) { return obj.updatePrice; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _updateStock_decorators, { kind: "method", name: "updateStock", static: false, private: false, access: { has: function (obj) { return "updateStock" in obj; }, get: function (obj) { return obj.updateStock; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
// Data Storage (Array of Tuples)
var productInventory = [];
// Sample Products
var product1 = new Product(1, "Smartphone", Category.Electronics, 15999, 25);
var product2 = new Product(2, "Running Shoes", Category.Fashion, 2999, 50);
var product3 = new Product(3, "LED Bulb", Category.Home, 199, 100);
var product4 = new Product(4, "Cricket Bat", Category.Sports, 1499, 15);
var product5 = new Product(5, "Organic Rice", Category.Grocery, 799, 200);
// Push to inventory
productInventory.push([product1.id, product1], [product2.id, product2], [product3.id, product3], [product4.id, product4], [product5.id, product5]);
// Display all products
console.log("Current Product Inventory:\n");
for (var _i = 0, productInventory_1 = productInventory; _i < productInventory_1.length; _i++) {
    var _a = productInventory_1[_i], product = _a[1];
    product.display();
}
// Demonstrate decorator functionality
console.log("\n Updating product price and stock...\n");
product1.updatePrice(17999);
product3.updateStock(120);
// Display updated inventory
console.log("\n Updated Product Inventory:\n");
for (var _b = 0, productInventory_2 = productInventory; _b < productInventory_2.length; _b++) {
    var _c = productInventory_2[_b], product = _c[1];
    product.display();
}
