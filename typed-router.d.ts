/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'root': RouteRecordInfo<'root', '/', Record<never, never>, Record<never, never>>,
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'academy-course-details': RouteRecordInfo<'academy-course-details', '/academy/course-details', Record<never, never>, Record<never, never>>,
    'academy-dashboard': RouteRecordInfo<'academy-dashboard', '/academy/dashboard', Record<never, never>, Record<never, never>>,
    'academy-my-course': RouteRecordInfo<'academy-my-course', '/academy/my-course', Record<never, never>, Record<never, never>>,
    'account-settings-tab': RouteRecordInfo<'account-settings-tab', '/account-settings/:tab', { tab: ParamValue<true> }, { tab: ParamValue<false> }>,
    'admin-second-page': RouteRecordInfo<'admin-second-page', '/admin/second-page', Record<never, never>, Record<never, never>>,
    'admin-third-page': RouteRecordInfo<'admin-third-page', '/admin/third-page', Record<never, never>, Record<never, never>>,
    'calendar': RouteRecordInfo<'calendar', '/calendar', Record<never, never>, Record<never, never>>,
    'dashboards-analytics': RouteRecordInfo<'dashboards-analytics', '/dashboards/analytics', Record<never, never>, Record<never, never>>,
    'dashboards-crm': RouteRecordInfo<'dashboards-crm', '/dashboards/crm', Record<never, never>, Record<never, never>>,
    'dashboards-ecommerce': RouteRecordInfo<'dashboards-ecommerce', '/dashboards/ecommerce', Record<never, never>, Record<never, never>>,
    'invoice-add': RouteRecordInfo<'invoice-add', '/invoice/add', Record<never, never>, Record<never, never>>,
    'invoice-edit-id': RouteRecordInfo<'invoice-edit-id', '/invoice/edit/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'invoice-list': RouteRecordInfo<'invoice-list', '/invoice/list', Record<never, never>, Record<never, never>>,
    'invoice-preview-id': RouteRecordInfo<'invoice-preview-id', '/invoice/preview/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'misc-coming-soon': RouteRecordInfo<'misc-coming-soon', '/misc/coming-soon', Record<never, never>, Record<never, never>>,
    'misc-under-maintenance': RouteRecordInfo<'misc-under-maintenance', '/misc/under-maintenance', Record<never, never>, Record<never, never>>,
    'user-profile-tab': RouteRecordInfo<'user-profile-tab', '/user-profile/:tab', { tab: ParamValue<true> }, { tab: ParamValue<false> }>,
  }
}
