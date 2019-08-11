'use strict';

define("mi-guatemala/tests/helpers/destroy-app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = destroyApp;

  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define("mi-guatemala/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("mi-guatemala/tests/helpers/module-for-acceptance", ["exports", "qunit", "mi-guatemala/tests/helpers/start-app", "mi-guatemala/tests/helpers/destroy-app"], function (_exports, _qunit, _startApp, _destroyApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }

    });
  }
});
define("mi-guatemala/tests/helpers/resolver", ["exports", "mi-guatemala/resolver", "mi-guatemala/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("mi-guatemala/tests/helpers/start-app", ["exports", "mi-guatemala/app", "mi-guatemala/config/environment"], function (_exports, _app, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startApp;

  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);

      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define("mi-guatemala/tests/integration/components/portfolio-test", ["chai", "mocha", "ember-mocha", "@ember/test-helpers"], function (_chai, _mocha, _emberMocha, _testHelpers) {
  "use strict";

  (0, _mocha.describe)('Integration | Component | portfolio', function () {
    (0, _emberMocha.setupRenderingTest)();
    (0, _mocha.it)('renders', async function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8AZElhw1",
        "block": "{\"symbols\":[],\"statements\":[[5,\"portfolio\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.element.textContent.trim()).to.equal(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Ki3aZNC3",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"portfolio\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      (0, _chai.expect)(this.element.textContent.trim()).to.equal('template block text');
    });
  });
});
define("mi-guatemala/tests/lint/app.lint-test", [], function () {
  "use strict";

  describe('ESLint | app', function () {
    it('adapters/application.js', function () {
      // test failed
      var error = new chai.AssertionError('adapters/application.js should pass ESLint\n\n5:3 - Parsing error: Unexpected character \'@\' (null)');
      error.stack = undefined;
      throw error;
    });
    it('app.js', function () {// test passed
    });
    it('components/disqus-panel.js', function () {// test passed
    });
    it('components/frente-a-frente.js', function () {// test passed
    });
    it('components/item-portfolio.js', function () {
      // test failed
      var error = new chai.AssertionError('components/item-portfolio.js should pass ESLint\n\n10:18 - \'args\' is defined but never used. (no-unused-vars)');
      error.stack = undefined;
      throw error;
    });
    it('components/portfolio.js', function () {// test passed
    });
    it('components/profile-functionalities.js', function () {// test passed
    });
    it('components/share-facebook.js', function () {// test passed
    });
    it('components/share-twitter.js', function () {// test passed
    });
    it('controllers/index.js', function () {
      // test failed
      var error = new chai.AssertionError('controllers/index.js should pass ESLint\n\n3:10 - \'computed\' is defined but never used. (no-unused-vars)');
      error.stack = undefined;
      throw error;
    });
    it('controllers/institucion.js', function () {// test passed
    });
    it('controllers/perfil/frente-a-frente.js', function () {
      // test failed
      var error = new chai.AssertionError('controllers/perfil/frente-a-frente.js should pass ESLint\n\n2:10 - \'computed\' is defined but never used. (no-unused-vars)');
      error.stack = undefined;
      throw error;
    });
    it('controllers/perfil/index.js', function () {// test passed
    });
    it('controllers/perfil/partido.js', function () {
      // test failed
      var error = new chai.AssertionError('controllers/perfil/partido.js should pass ESLint\n\n3:10 - \'computed\' is defined but never used. (no-unused-vars)');
      error.stack = undefined;
      throw error;
    });
    it('controllers/perfiles.js', function () {
      // test failed
      var error = new chai.AssertionError('controllers/perfiles.js should pass ESLint\n\n479:24 - Don\'t use observers if possible (ember/no-observers)');
      error.stack = undefined;
      throw error;
    });
    it('helpers/get-html-safe.js', function () {// test passed
    });
    it('helpers/is-numeric.js', function () {// test passed
    });
    it('helpers/twitter-link.js', function () {// test passed
    });
    it('initializers/main.js', function () {// test passed
    });
    it('models/candidate.js', function () {// test passed
    });
    it('models/election.js', function () {// test passed
    });
    it('models/institution.js', function () {// test passed
    });
    it('models/partido.js', function () {// test passed
    });
    it('models/profile.js', function () {// test passed
    });
    it('resolver.js', function () {// test passed
    });
    it('router.js', function () {// test passed
    });
    it('routes/application.js', function () {// test passed
    });
    it('routes/index.js', function () {// test passed
    });
    it('routes/perfil.js', function () {
      // test failed
      var error = new chai.AssertionError('routes/perfil.js should pass ESLint\n\n4:10 - \'A\' is defined but never used. (no-unused-vars)\n45:11 - \'spreadsheet\' is assigned a value but never used. (no-unused-vars)\n46:11 - \'_routing\' is assigned a value but never used. (no-unused-vars)');
      error.stack = undefined;
      throw error;
    });
    it('routes/perfil/autoridades.js', function () {// test passed
    });
    it('routes/perfil/candidatos.js', function () {// test passed
    });
    it('routes/perfil/comision.js', function () {// test passed
    });
    it('routes/perfil/frente-a-frente.js', function () {// test passed
    });
    it('routes/perfil/index.js', function () {// test passed
    });
    it('routes/perfiles.js', function () {// test passed
    });
    it('services/spreadsheets.js', function () {
      // test failed
      var error = new chai.AssertionError('services/spreadsheets.js should pass ESLint\n\n50:24 - \'spreadsheetKey\' is assigned a value but never used. (no-unused-vars)');
      error.stack = undefined;
      throw error;
    });
    it('transforms/frente-a-frente.js', function () {// test passed
    });
    it('transforms/informacion-general.js', function () {// test passed
    });
  });
});
define("mi-guatemala/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  describe('TemplateLint', function () {
    it('mi-guatemala/templates/application-loading.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/application.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/disqus-panel.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/frente-a-frente.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/item-portfolio.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/portfolio.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/profile-functionalities.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/share-facebook.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/components/share-twitter.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/head.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/index.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/perfil.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/perfil/autoridades.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/perfil/candidatos.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/perfil/comision.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/perfil/frente-a-frente.hbs', function () {// test passed
    });
    it('mi-guatemala/templates/perfil/index.hbs', function () {
      // test failed
      var error = new chai.AssertionError('mi-guatemala/templates/perfil/index.hbs should pass TemplateLint.\n\nmi-guatemala/templates/perfil/index.hbs\n  71:0  error  Incorrect indentation for `{{! Misi\xF3n y Visi\xF3n }}` beginning at L71:C0. Expected `{{! Misi\xF3n y Visi\xF3n }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  72:0  error  Incorrect indentation for `<div>` beginning at L72:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  95:0  error  Incorrect indentation for `{{! Autoridades }}` beginning at L95:C0. Expected `{{! Autoridades }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  96:0  error  Incorrect indentation for `<div>` beginning at L96:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  120:0  error  Incorrect indentation for `{{! Presupuesto }}` beginning at L120:C0. Expected `{{! Presupuesto }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  121:0  error  Incorrect indentation for `<div>` beginning at L121:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  143:0  error  Incorrect indentation for `{{! Biograf\xEDa }}` beginning at L143:C0. Expected `{{! Biograf\xEDa }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  144:0  error  Incorrect indentation for `<div>` beginning at L144:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  164:0  error  Incorrect indentation for `<div>` beginning at L164:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  206:0  error  Incorrect indentation for `{{! Comisionados }}` beginning at L206:C0. Expected `{{! Comisionados }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  207:0  error  Incorrect indentation for `<div>` beginning at L207:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  75:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  99:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  124:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  147:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  168:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  187:46  error  Interaction added to non-interactive element  no-invalid-interactive\n  210:11  error  Interaction added to non-interactive element  no-invalid-interactive\n');
      error.stack = undefined;
      throw error;
    });
    it('mi-guatemala/templates/perfiles.hbs', function () {// test passed
    });
  });
});
define("mi-guatemala/tests/lint/tests.lint-test", [], function () {
  "use strict";

  describe('ESLint | tests', function () {
    it('helpers/destroy-app.js', function () {// test passed
    });
    it('helpers/module-for-acceptance.js', function () {// test passed
    });
    it('helpers/resolver.js', function () {// test passed
    });
    it('helpers/start-app.js', function () {// test passed
    });
    it('integration/components/portfolio-test.js', function () {// test passed
    });
    it('test-helper.js', function () {// test passed
    });
    it('unit/adapters/application-test.js', function () {// test passed
    });
    it('unit/routes/perfil-test.js', function () {// test passed
    });
    it('unit/routes/perfil/autoridades-test.js', function () {// test passed
    });
    it('unit/routes/perfil/candidatos-test.js', function () {// test passed
    });
    it('unit/routes/perfil/comision-test.js', function () {// test passed
    });
    it('unit/routes/perfil/frente-a-frente-test.js', function () {// test passed
    });
    it('unit/routes/perfiles-test.js', function () {// test passed
    });
  });
});
define("mi-guatemala/tests/test-helper", ["mi-guatemala/app", "mi-guatemala/config/environment", "@ember/test-helpers", "ember-mocha"], function (_app, _environment, _testHelpers, _emberMocha) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberMocha.start)();
});
define("mi-guatemala/tests/unit/adapters/application-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Adapter | application', function () {
    (0, _emberMocha.setupTest)(); // Replace this with your real tests.

    (0, _mocha.it)('exists', function () {
      let adapter = this.owner.lookup('adapter:application');
      (0, _chai.expect)(adapter).to.be.ok;
    });
  });
});
define("mi-guatemala/tests/unit/routes/perfil-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Route | perfil', function () {
    (0, _emberMocha.setupTest)();
    (0, _mocha.it)('exists', function () {
      let route = this.owner.lookup('route:perfil');
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define("mi-guatemala/tests/unit/routes/perfil/autoridades-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Route | perfil/autoridades', function () {
    (0, _emberMocha.setupTest)();
    (0, _mocha.it)('exists', function () {
      let route = this.owner.lookup('route:perfil/autoridades');
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define("mi-guatemala/tests/unit/routes/perfil/candidatos-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Route | perfil/candidatos', function () {
    (0, _emberMocha.setupTest)();
    (0, _mocha.it)('exists', function () {
      let route = this.owner.lookup('route:perfil/candidatos');
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define("mi-guatemala/tests/unit/routes/perfil/comision-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Route | perfil/comision', function () {
    (0, _emberMocha.setupTest)();
    (0, _mocha.it)('exists', function () {
      let route = this.owner.lookup('route:perfil/comision');
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define("mi-guatemala/tests/unit/routes/perfil/frente-a-frente-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Route | perfil/frente-a-frente', function () {
    (0, _emberMocha.setupTest)();
    (0, _mocha.it)('exists', function () {
      let route = this.owner.lookup('route:perfil/frente-a-frente');
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define("mi-guatemala/tests/unit/routes/perfiles-test", ["chai", "mocha", "ember-mocha"], function (_chai, _mocha, _emberMocha) {
  "use strict";

  (0, _mocha.describe)('Unit | Route | perfiles', function () {
    (0, _emberMocha.setupTest)();
    (0, _mocha.it)('exists', function () {
      let route = this.owner.lookup('route:perfiles');
      (0, _chai.expect)(route).to.be.ok;
    });
  });
});
define('mi-guatemala/config/environment', [], function() {
  var prefix = 'mi-guatemala';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('mi-guatemala/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
