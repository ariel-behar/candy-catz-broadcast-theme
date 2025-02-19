/*********************** Custom JS for Boost AI Search & Discovery  ************************/

if (window.boostWidgetIntegration) {
    window.boostWidgetIntegration.integration = Object.assign(
        { wishlists: 'growave' },
        window.boostWidgetIntegration.integration || {}
    );
}