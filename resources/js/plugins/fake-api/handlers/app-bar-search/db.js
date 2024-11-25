export const db = {
  searchItems: [
    {
      title: 'Dashboards',
      category: 'dashboards',
      children: [
        {
          url: { name: 'dashboards-analytics' },
          icon: 'tabler-timeline',
          title: 'Analytics Dashboard',
        },
        {
          url: { name: 'dashboards-crm' },
          icon: 'tabler-file-analytics',
          title: 'CRM Dashboard',
        },
        {
          url: { name: 'dashboards-ecommerce' },
          icon: 'tabler-shopping-cart',
          title: 'ECommerce Dashboard',
        },
        {
          url: { name: 'dashboards-academy' },
          icon: 'tabler-book',
          title: 'Academy Dashboard',
        },
      ],
    },
    {
      title: 'Front Pages',
      category: 'frontPages',
      children: [
        {
          url: { name: 'front-pages-landing-page' },
          icon: 'tabler-file-description',
          title: 'Landing Front',
        },
        {
          url: { name: 'front-pages-pricing' },
          icon: 'tabler-file-description',
          title: 'Pricing Front',
        },
        {
          url: { name: 'front-pages-payment' },
          icon: 'tabler-file-description',
          title: 'Payment Front',
        },
        {
          url: { name: 'front-pages-checkout' },
          icon: 'tabler-file-description',
          title: 'Checkout Front',
        },
        {
          url: { name: 'front-pages-help-center' },
          icon: 'tabler-file-description',
          title: 'Help Center Front',
        },
      ],
    },
    {
      title: 'Apps & Pages',
      category: 'appsPages',
      children: [
        {
          url: { name: 'email' },
          icon: 'tabler-mail',
          title: 'Email',
        },
        {
          url: { name: 'chat' },
          icon: 'tabler-message',
          title: 'Chat',
        },
        {
          url: { name: 'calendar' },
          icon: 'tabler-calendar',
          title: 'Calendar',
        },
        {
          title: 'Kanban',
          icon: 'tabler-layout-kanban',
          url: { name: 'kanban' },
        },
        {
          url: { name: 'ecommerce-dashboard' },
          icon: 'tabler-shopping-cart',
          title: 'ECommerce Dashboard',
        },
        {
          url: { name: 'ecommerce-product-list' },
          icon: 'tabler-list',
          title: 'Ecommerce - Product List',
        },
        {
          url: { name: 'ecommerce-product-add' },
          icon: 'tabler-circle-plus',
          title: 'Ecommerce - Add Product',
        },
        {
          url: { name: 'ecommerce-product-category-list' },
          icon: 'tabler-list',
          title: 'Ecommerce - Category List',
        },
        {
          url: { name: 'ecommerce-order-list' },
          icon: 'tabler-list',
          title: 'Ecommerce - Order List',
        },
        {
          url: { name: 'ecommerce-order-details-id', params: { id: '9042' } },
          icon: 'tabler-list-check',
          title: 'Ecommerce - Order Details',
        },
        {
          url: { name: 'ecommerce-customer-list' },
          icon: 'tabler-user',
          title: 'Ecommerce - Customer List',
        },
        {
          url: { name: 'ecommerce-customer-details-id', params: { id: '478426', tab: 'security' } },
          icon: 'tabler-list',
          title: 'Ecommerce - Customer Details',
        },
        {
          url: { name: 'ecommerce-manage-review' },
          icon: 'tabler-quote',
          title: 'Ecommerce - Manage Review',
        },
        {
          url: { name: 'ecommerce-referrals' },
          icon: 'tabler-users-group',
          title: 'Ecommerce - Referrals',
        },
        {
          url: { name: 'ecommerce-settings' },
          icon: 'tabler-settings',
          title: 'Ecommerce - Settings',
        },
        {
          url: { name: 'academy-dashboard' },
          icon: 'tabler-book',
          title: 'Academy - Dashboard',
        },
        {
          url: { name: 'academy-my-course' },
          icon: 'tabler-list',
          title: 'Academy - My Courses',
        },
        {
          url: { name: 'academy-course-details' },
          icon: 'tabler-list',
          title: 'Academy - Course Details',
        },
        {
          url: { name: 'logistics-dashboard' },
          icon: 'tabler-book',
          title: 'Logistics - Dashboard',
        },
        {
          url: { name: 'logistics-fleet' },
          icon: 'tabler-car',
          title: 'Logistics - fleet',
        },
        {
          url: { name: 'invoice-list' },
          icon: 'tabler-list',
          title: 'Invoice List',
        },
        {
          url: { name: 'invoice-preview-id', params: { id: '5036' } },
          icon: 'tabler-file-description',
          title: 'Invoice Preview',
        },
        {
          url: { name: 'invoice-edit-id', params: { id: '5036' } },
          icon: 'tabler-file-pencil',
          title: 'Invoice Edit',
        },
        {
          url: { name: 'invoice-add' },
          icon: 'tabler-file-plus',
          title: 'Invoice Add',
        },
        {
          url: { name: 'user-list' },
          icon: 'tabler-users-group',
          title: 'User List',
        },
        {
          url: { name: 'user-view-id', params: { id: 21 } },
          icon: 'tabler-eye',
          title: 'User View',
        },
        {
          url: { name: 'user-profile-tab', params: { tab: 'profile' } },
          icon: 'tabler-user-circle',
          title: 'User Profile - Profile',
        },
        {
          url: { name: 'account-settings-tab', params: { tab: 'account' } },
          icon: 'tabler-user-circle',
          title: 'Account Settings - Account',
        },
        {
          url: { name: 'account-settings-tab', params: { tab: 'security' } },
          icon: 'tabler-lock-open',
          title: 'Account Settings - Security',
        },
        {
          url: { name: 'account-settings-tab', params: { tab: 'billing-plans' } },
          icon: 'tabler-currency-dollar',
          title: 'Account Settings - Billing',
        },
        {
          url: { name: 'account-settings-tab', params: { tab: 'notification' } },
          icon: 'tabler-bell',
          title: 'Account Settings - Notifications',
        },
        {
          url: { name: 'account-settings-tab', params: { tab: 'connection' } },
          icon: 'tabler-link',
          title: 'Account Settings - Connections',
        },
        {
          url: { name: 'pricing' },
          icon: 'tabler-currency-dollar',
          title: 'Pricing',
        },
        {
          url: { name: 'faq' },
          icon: 'tabler-help-circle',
          title: 'FAQ',
        },
        {
          url: { name: 'misc-coming-soon' },
          icon: 'tabler-clock',
          title: 'Coming Soon',
        },
        {
          url: { name: 'misc-under-maintenance' },
          icon: 'tabler-settings',
          title: 'Under Maintenance',
        },
        {
          url: { path: '/pages/misc/page-not-found' },
          icon: 'tabler-alert-circle',
          title: 'Page Not Found - 404',
        },
        {
          url: { path: '/pages/misc/not-authorized' },
          icon: 'tabler-user-x',
          title: 'Not Authorized - 401',
        },
        {
          url: { name: 'authentication-login-v1' },
          icon: 'tabler-login',
          title: 'Login V1',
        },
        {
          url: { name: 'authentication-login-v2' },
          icon: 'tabler-login',
          title: 'Login V2',
        },
        {
          url: { name: 'authentication-register-v1' },
          icon: 'tabler-user-plus',
          title: 'Register V1',
        },
        {
          url: { name: 'authentication-register-v2' },
          icon: 'tabler-user-plus',
          title: 'Register V2',
        },
        {
          icon: 'tabler-mail',
          title: 'Verify Email V1',
          url: { name: 'authentication-verify-email-v1' },
        },
        {
          icon: 'tabler-mail',
          title: 'Verify Email V2',
          url: { name: 'authentication-verify-email-v2' },
        },
        {
          url: { name: 'authentication-forgot-password-v1' },
          icon: 'tabler-lock-exclamation',
          title: 'Forgot Password V1',
        },
        {
          url: { name: 'authentication-forgot-password-v2' },
          icon: 'tabler-lock-exclamation',
          title: 'Forgot Password V2',
        },
        {
          url: { name: 'authentication-reset-password-v1' },
          icon: 'tabler-help-circle',
          title: 'Reset Password V1',
        },
        {
          url: { name: 'authentication-reset-password-v2' },
          icon: 'tabler-help-circle',
          title: 'Reset Password V2',
        },
        {
          icon: 'tabler-devices',
          title: 'Two Steps V1',
          url: { name: 'authentication-two-steps-v1' },
        },
        {
          icon: 'tabler-devices',
          title: 'Two Steps V2',
          url: { name: 'authentication-two-steps-v2' },
        },
        {
          url: { name: 'dialog-examples' },
          icon: 'tabler-square',
          title: 'Dialog Examples',
        },
        {
          url: { name: 'authentication-register-multi-steps' },
          icon: 'tabler-user-plus',
          title: 'Register Multi-Steps',
        },
        {
          url: { name: 'wizard-examples-checkout' },
          icon: 'tabler-shopping-cart',
          title: 'Wizard - Checkout',
        },
        {
          url: { name: 'wizard-examples-create-deal' },
          icon: 'tabler-gift',
          title: 'Wizard - create deal',
        },
        {
          url: { name: 'wizard-examples-property-listing' },
          icon: 'tabler-home',
          title: 'Wizard - Property Listing',
        },
        {
          url: { name: 'roles' },
          icon: 'tabler-shield-checkered',
          title: 'Roles',
        },
        {
          url: { name: 'permissions' },
          icon: 'tabler-shield-checkered',
          title: 'Permissions',
        },
      ],
    },
    {
      title: 'User Interface',
      category: 'userInterface',
      children: [
        {
          url: { name: 'typography' },
          icon: 'tabler-letter-case',
          title: 'Typography',
        },
        {
          url: { name: 'icons' },
          icon: 'tabler-icons',
          title: 'Icons',
        },
        {
          url: { name: 'cards-card-basic' },
          icon: 'tabler-id',
          title: 'Card Basic',
        },
        {
          url: { name: 'cards-card-advance' },
          icon: 'tabler-square-plus',
          title: 'Card Advance',
        },
        {
          url: { name: 'cards-card-statistics' },
          icon: 'tabler-chart-bar',
          title: 'Card Statistics',
        },
        {
          url: { name: 'cards-card-widgets' },
          icon: 'tabler-chart-bar',
          title: 'Card widgets',
        },
        {
          url: { name: 'cards-card-actions' },
          icon: 'tabler-square-plus',
          title: 'Card Actions',
        },
        {
          url: { name: 'components-alert' },
          icon: 'tabler-alert-triangle',
          title: 'Alerts',
        },
        {
          url: { name: 'components-avatar' },
          icon: 'tabler-user-circle',
          title: 'Avatars',
        },
        {
          url: { name: 'components-badge' },
          icon: 'tabler-badge',
          title: 'Badges',
        },
        {
          url: { name: 'components-button' },
          icon: 'tabler-circle-plus',
          title: 'Buttons',
        },
        {
          url: { name: 'components-chip' },
          icon: 'tabler-square',
          title: 'Chips',
        },
        {
          url: { name: 'components-dialog' },
          icon: 'tabler-square',
          title: 'Dialogs',
        },
        {
          url: { name: 'components-list' },
          icon: 'tabler-list',
          title: 'List',
        },
        {
          url: { name: 'components-menu' },
          icon: 'tabler-menu-2',
          title: 'Menu',
        },
        {
          url: { name: 'components-pagination' },
          icon: 'tabler-skip-forward',
          title: 'Pagination',
        },
        {
          url: { name: 'components-progress-circular' },
          icon: 'tabler-progress',
          title: 'Progress Circular',
        },
        {
          url: { name: 'components-progress-linear' },
          icon: 'tabler-progress',
          title: 'Progress Linear',
        },
        {
          url: { name: 'components-expansion-panel' },
          icon: 'tabler-align-center',
          title: 'Expansion Panel',
        },
        {
          url: { name: 'components-snackbar' },
          icon: 'tabler-message-dots',
          title: 'Snackbar',
        },
        {
          url: { name: 'components-tabs' },
          icon: 'tabler-app-window',
          title: 'Tabs',
        },
        {
          url: { name: 'components-timeline' },
          icon: 'tabler-timeline',
          title: 'Timeline',
        },
        {
          url: { name: 'components-tooltip' },
          icon: 'tabler-message-2',
          title: 'Tooltip',
        },
        {
          url: { name: 'extensions-tour' },
          icon: 'tabler-box',
          title: 'Tour',
        },
        {
          url: { name: 'extensions-swiper' },
          icon: 'tabler-photo',
          title: 'Swiper',
        },
      ],
    },
    {
      title: 'Forms & Tables',
      category: 'formsTables',
      children: [
        {
          url: { name: 'forms-textfield' },
          icon: 'tabler-text-caption',
          title: 'TextField',
        },
        {
          url: { name: 'forms-select' },
          icon: 'tabler-list-check',
          title: 'Select',
        },
        {
          url: { name: 'forms-checkbox' },
          icon: 'tabler-square-check',
          title: 'Checkbox',
        },
        {
          url: { name: 'forms-radio' },
          icon: 'tabler-circle-dot',
          title: 'Radio',
        },
        {
          url: { name: 'forms-combobox' },
          icon: 'tabler-square-check',
          title: 'Combobox',
        },
        {
          url: { name: 'forms-date-time-picker' },
          icon: 'tabler-calendar',
          title: 'Date Time picker',
        },
        {
          url: { name: 'forms-textarea' },
          icon: 'tabler-notes',
          title: 'Textarea',
        },
        {
          url: { name: 'forms-switch' },
          icon: 'tabler-toggle-right',
          title: 'Switch',
        },
        {
          url: { name: 'forms-file-input' },
          icon: 'tabler-upload',
          title: 'File Input',
        },
        {
          url: { name: 'forms-editors' },
          icon: 'tabler-file-pencil',
          title: 'Editors',
        },
        {
          url: { name: 'forms-rating' },
          icon: 'tabler-star',
          title: 'Form Rating',
        },
        {
          url: { name: 'forms-slider' },
          icon: 'tabler-hand-move',
          title: 'Slider',
        },
        {
          url: { name: 'forms-range-slider' },
          icon: 'tabler-adjustments-horizontal',
          title: 'Range Slider',
        },
        {
          url: { name: 'forms-form-layouts' },
          icon: 'tabler-box',
          title: 'Form Layouts',
        },
        {
          url: { name: 'forms-form-validation' },
          icon: 'tabler-circle-check',
          title: 'Form Validation',
        },
        {
          url: { name: 'forms-custom-input' },
          icon: 'tabler-list-details',
          title: 'Custom Input',
        },
        {
          url: { name: 'forms-autocomplete' },
          icon: 'tabler-align-left',
          title: 'Autocomplete',
        },
        {
          url: { name: 'tables-data-table' },
          icon: 'tabler-table',
          title: 'Data Table',
        },
        {
          url: { name: 'tables-simple-table' },
          icon: 'tabler-table',
          title: 'Simple Table',
        },
        {
          url: { name: 'forms-form-wizard-numbered' },
          icon: 'tabler-align-center',
          title: 'Form Wizard Numbered',
        },
        {
          url: { name: 'forms-form-wizard-icons' },
          icon: 'tabler-align-center',
          title: 'Form Wizard Icons',
        },
      ],
    },
    {
      title: 'Chart & Misc',
      category: 'chartsMisc',
      children: [
        {
          url: { name: 'charts-apex-chart' },
          icon: 'tabler-chart-area-line',
          title: 'Apex Charts',
        },
        {
          url: { name: 'charts-chartjs' },
          icon: 'tabler-chart-histogram',
          title: 'ChartJS',
        },
        {
          url: { name: 'access-control' },
          icon: 'tabler-shield',
          title: 'Access Control (ACL)',
        },
      ],
    },
  ],
}
