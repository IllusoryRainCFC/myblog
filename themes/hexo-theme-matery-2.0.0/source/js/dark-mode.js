(function () {
    'use strict';

    var STORAGE_KEY = 'matery-theme';
    var root = document.documentElement;
    var toggles;

    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            // 隐私模式或禁用 localStorage 时仍然允许本次切换。
        }
    }

    function setTheme(theme) {
        var isDark = theme === 'dark';
        root.setAttribute('data-theme', isDark ? 'dark' : 'light');

        if (!toggles) {
            toggles = document.querySelectorAll('[data-dark-mode-toggle]');
        }
        toggles.forEach(function (toggle) {
            var icon = toggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon', !isDark);
                icon.classList.toggle('fa-sun', isDark);
            }
            toggle.setAttribute('aria-label', isDark ? '切换日间模式' : '切换夜间模式');
            toggle.setAttribute('title', isDark ? '切换日间模式' : '切换夜间模式');
        });
    }

    function currentTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function init() {
        toggles = document.querySelectorAll('[data-dark-mode-toggle]');
        setTheme(currentTheme());

        toggles.forEach(function (toggle) {
            toggle.addEventListener('click', function (event) {
                event.preventDefault();
                var nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
                setTheme(nextTheme);
                saveTheme(nextTheme);
            });
        });

        window.addEventListener('storage', function (event) {
            if (event.key === STORAGE_KEY && (event.newValue === 'dark' || event.newValue === 'light')) {
                setTheme(event.newValue);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
