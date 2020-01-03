/**
 * Created by HSommer on 6/8/2017.
 */
angular.module('app')
    .constant('ICON_INFO', {

        down_thick: {
            uses: 'menu open',
            notes: ''
        },

        down_thin: {
            uses: 'menu open',
            notes: ''
        },

        up_thick: {
            uses: 'menu close',
            notes: ''
        },

        up_thin:{
            uses: 'menu close',
            notes: ''
        },

        new_thick: {
            uses: 'new, add',
            notes: ''
        },

        new_thin: {
            uses: 'new, add',
            notes: ''
        },

        close_thick: {
            uses: 'close, remove, clear',
            notes: 'do not use for delete'
        },

        close_thin: {
            uses: 'close, remove, clear',
            notes: 'do not use for delete'
        },

        check_thick: {
            uses: '',
            notes: ''
        },

        check_thin: {
            uses: 'selected, completed',
            notes: ''
        },

        search_thick: {
            uses: 'search, find',
            notes: ''
        },

        search_thin: {
            uses: 'search, find',
            notes: ''
        },

        prev_left_thick: {
            uses: 'back, previous',
            notes: ''
        },

        prev_left_thin: {
            uses: 'back, previous',
            notes: ''
        },

        next_right_thick: {
            uses: 'next',
            notes: ''
        },

        next_right_thin: {
            uses: 'next',
            notes: ''
        },

        flow_goto_next_thick: {
            uses: 'sort a-z, down arrowflow: go to next',
            notes: ''
        },

        flow_goto_next_thin: {
            uses: 'sort a-z, down arrow, flow: go to next',
            notes: ''
        },

        flow_goto_prev_thick: {
            uses: 'sort z-a, up arrow, flow: go to previous',
            notes: ''
        },

        flow_goto_prev_thin: {
            uses: 'sort z-a, up arrow, flow: go to previous',
            notes: ''
        },

        forward_right_thick: {
            uses: 'forward, right arrow',
            notes: ''
        },

        forward_right_thin: {
            uses: 'forward, right arrow',
            notes: ''
        },

        back_left_thick: {
            uses: 'backward, left arrow',
            notes: ''
        },

        back_left_thin: {
            uses: 'backward, left arrow',
            notes: ''
        },

        flow_return_thick: {
            uses: 'return',
            notes: ''
        },

        flow_return_thin: {
            uses: 'return',
            notes: ''
        },

        minus_thick: {
            uses: 'remove',
            notes: 'Use the X icon as the primary remove button. Use the minus icon only together with the add icon.'
        },

        reload_refresh_thick: {
            uses: 'refresh, reload',
            notes: ''
        },

        reload_refresh_thin: {
            uses: 'refresh, reload',
            note: ''
        },

        circle_horz_menu_fill: {
            uses: 'context menu',
            notes: ''
        },

        circle_horz_menu_thin: {
            uses: 'context menu',
            notes: ''
        },

        circle_vert_menu_fill: {
            uses: 'context menu',
            notes: 'Vertical, filled menu is the default icon to use as a context menu icon'
        },

        circle_vert_menu_thin: {
            uses: 'context menu',
            notes: ''
        },

        favorite_outline_thin: {
            uses: 'favorite',
            notes: ''
        },

        favorite_fill: {
            uses: 'favorite, marked as favorite',
            notes: ''
        },

        status_ok_thick: {
            uses: 'status: OK',
            notes: 'use standard green color [$color-accent-5]'
        },

        stats_ok_thin: {
            uses: 'status: OK',
            notes: 'use standard green color [$color-accent-5]'
        },

        status_ok_fill: {
            uses: 'status: OK',
            notes: 'use standard green color [$color-accent-5]'
        },

        status_error_thick: {
            uses: 'status: Error',
            notes: 'use standard red color [$color-accent-4]'
        },

        status_error_thin: {
            uses: 'status: Error',
            notes: 'use standard red color [$color-accent-4]'
        },

        status_error_fill: {
            uses: 'status: Error',
            notes: 'use standard red color [$color-accent-4]'
        },

        status_warn_thick: {
            uses: 'status: Warning',
            notes: 'use standard yellow color [$color-accent-1]'
        },

        status_warn_thin: {
            uses: 'status: Warning',
            notes: 'use standard yellow color [$color-accent-1]'
        },

        status_warn_fill: {
            uses: 'status: Warning',
            notes: 'use standard yellow color [$color-accent-1]'
        },

        message_error_thick: {
            uses: '',
            notes: ''
        },

        message_error_red_fill: {
            uses: '',
            notes: ''
        },

        status_disconnected_thick: {
            uses: '',
            notes: ''
        },

        status_disconnected_thin: {
            uses: '',
            notes: ''
        },

        status_info_thick: {
            uses: '',
            notes: ''
        },

        status_denied_thick: {
            uses: '',
            notes: ''
        },

        status_denied_thin: {
            uses: '',
            notes: ''
        },

        status_pending_thick: {
            uses: '',
            notes: ''
        },

        status_pending_thin: {
            uses: '',
            notes: ''
        },

        status_retracted_thick: {
            uses: '',
            notes: ''
        },

        sys_mac: {
            uses: '',
            notes: ''
        },

        status_retracted_thin: {
            uses: '',
            notes: ''
        },

        status_running_thick: {
            uses: '',
            notes: ''
        },

        status_running_thin: {
            uses: '',
            notes: ''
        },

        filter_thick: {
            uses: '',
            notes: ''
        },

        filter_clear_thick: {
            uses: '',
            notes: ''
        },

        comment_sys_thin: {
            uses: '',
            notes: ''
        },

        comment_user_thin: {
            uses: '',
            notes: ''
        },

        comment_thick: {
            uses: '',
            notes: ''
        },

        start_thick: {
            uses: '',
            notes: ''
        },

        start_thin:{
            uses: '',
            notes: ''
        },

        stop_thick: {
            uses: '',
            notes: ''
        },

        stop_thin: {
            uses: '',
            notes: ''
        },

        control_play_thick: {
            uses: '',
            notes: ''
        },

        control_play_thin: {
            uses: '',
            notes: ''
        },

        control_rewind_thick: {
            uses: '',
            notes: ''
        },

        control_rewind_thin: {
            uses: '',
            notes: ''
        },

        control_fast_forward_thick: {
            uses: '',
            notes: ''
        },

        control_fast_forward_thin: {
            uses: '',
            notes: ''
        },

        control_fast_rewind_thick: {
            uses: '',
            notes: ''
        },

        control_fast_rewind_thin: {
            uses: '',
            notes: ''
        },

        control_goto_end_thick: {
            uses: '',
            notes: ''
        },

        control_goto_end_thin: {
            uses: '',
            notes: ''
        },

        control_goto_start_thick: {
            uses: '',
            notes: ''
        },

        control_goto_start_thin: {
            uses: '',
            notes: ''
        },

        control_pause_thick: {
            uses: '',
            notes: ''
        },

        control_pause_thin: {
            uses: '',
            notes: ''
        },

        control_stop_thick: {
            uses: '',
            notes: ''
        },

        control_stop_thin: {
            uses: '',
            notes: ''
        },

        view_tile_thick: {
            uses: '',
            notes: ''
        },

        view_tile_thin: {
            uses: '',
            notes: ''
        },

        view_list_thick:{
            uses: '',
            notes: ''
        },

        view_list_thin: {
            uses: '',
            notes: ''
        },

        file_thick: {
            uses: '',
            notes: ''
        },

        file_thin: {
            uses: '',
            notes: ''
        },

        doc_thick: {
            uses: '',
            notes: ''
        },

        doc_thin: {
            uses: '',
            notes: ''
        },

        report_thick: {
            uses: '',
            notes: ''
        },

        report_thin: {
            uses: '',
            notes: ''
        },

        export_to_doc_thick: {
            uses: '',
            notes: ''
        },

        export_to_doc_thin: {
            uses: '',
            notes: '',
        },

        bookmark_thick: {
            uses: '',
            notes: '',
        },

        bookmark_thin: {
            uses: '',
            notes: ''
        },

        folder_new_thick: {
            uses: '',
            notes: ''
        },

        folder_new_thin: {
            uses: '',
            notes: ''
        },

        folder_thick: {
            uses: '',
            notes: ''
        },

        folder_thin: {
            uses: '',
            notes: ''
        },

        image_thick: {
            uses: '',
            notes: ''
        },

        image_thin: {
            uses: '',
            notes: ''
        },

        logging_thin: {
            uses: '',
            notes: ''
        },

        storage_thin: {
            uses: '',
            notes: ''
        },

        certificate_thin: {
            uses: '',
            notes: ''
        },

        brand_thin: {
            uses: 'brand',
            notes: ''
        },

        theme_thin: {
            uses: '',
            notes: ''
        },

        audit_thin: {
            uses: '',
            notes: ''
        },

        audit2_thin: {
            uses: '',
            notes: ''
        },

        delete_thick: {
            uses: '',
            notes: ''
        },

        delete_thin: {
            uses: '',
            notes: ''
        },

        signout_thick: {
            uses: '',
            notes: ''
        },

        signout_thin: {
            uses: '',
            notes: ''
        },

        claim_thick: {
            uses: '',
            notes: ''
        },

        claim_thin: {
            uses: '',
            notes: ''
        },

        history_thick: {
            uses: '',
            notes: ''
        },

        history_thin: {
            uses: '',
            notes: ''
        },

        configure_thick: {
            uses: '',
            notes: ''
        },

        configure_thin: {
            uses: '',
            notes: ''
        },

        hamburger_menu_thick : {
            uses: '',
            notes: ''
        },

        hamburger_menu_thin: {
            uses: '',
            notes: ''
        },

        date_thick: {
            uses: '',
            notes: ''
        },

        date_thin: {
            uses: '',
            notes: ''
        },

        device_monitor_thin: {
            uses: '',
            notes: ''
        },

        device_mobile_thin: {
            uses: '',
            notes: ''
        },

        phone_thick: {
            uses: '',
            notes: ''
        },

        phone_mobile_thick: {
            uses: '',
            notes: ''
        },

        notify_thick: {
            uses: '',
            notes: ''
        },

        resource_assign: {
            uses: 'resource, asset, user, currency',
            notes: ''
        },

        resource_thick: {
            uses: 'resource, asset, currency',
            notes: ''
        },

        partner: {
            uses: 'partner, shared resource, asset, user',
            notes: ''
        },

        time_thick: {
            uses: '',
            notes: ''
        },

        location_thick: {
            uses: '',
            notes: ''
        },

        world_thin: {
            uses: '',
            notes: ''
        },

        email_thick: {
            uses: '',
            notes: ''
        },

        email_thin: {
            uses: '',
            notes: ''
        },

        fingerprint_thin: {
            uses: '',
            notes: ''
        },

        card_thin: {
            uses: '',
            notes: ''
        },

        home_thick: {
            uses: '',
            notes: ''
        },

        home_thin: {
            uses: '',
            notes: ''
        },

        lock_thick: {
            uses: '',
            notes: ''
        },

        lock_thin: {
            uses: '',
            notes: ''
        },

        unlock_thick: {
            uses: '',
            notes: ''
        },

        unlock_thin: {
            uses: '',
            notes: ''
        },

        password_thin: {
            uses: '',
            notes: ''
        },

        connector_thin: {
            uses: '',
            notes: ''
        },

        connector_sso_thin: {
            uses: '',
            notes: ''
        },

        orgchart_thin: {
            uses: '',
            notes: ''
        },

        select_thick: {
            uses: '',
            notes: ''
        },

        select_thin: {
            uses: '',
            notes: ''
        },

        size_contract_thick: {
            uses: '',
            notes: ''
        },

        size_contract_thin: {
            uses: '',
            notes: ''
        },

        size_expand_thick: {
            uses: '',
            notes: ''
        },

        size_expand_thin: {
            uses: '',
            notes: ''
        },

        sort_thick: {
            uses: '',
            notes: ''
        },

        sort_thin: {
            uses: '',
            notes: ''
        },

        shortcut_thick: {
            uses: '',
            notes: ''
        },

        shortcut_thin: {
            uses: '',
            notes: ''
        },

        cancel_thick: {
            uses: '',
            notes: ''
        },

        cancel_thin: {
            uses: '',
            notes: ''
        },

        help_thick: {
            uses: '',
            notes: ''
        },

        help_thin: {
            uses: '',
            notes: ''
        },

        reset_thick: {
            uses: '',
            notes: ''
        },

        reset_thin: {
            uses: '',
            notes: ''
        },

        download_thick: {
            uses: '',
            notes: ''
        },

        edit_thick: {
            uses: '',
            notes: ''
        },

        save_thick: {
            uses: '',
            notes: ''
        },

        group_thin: {
            uses: 'edirectory, user, group',
            notes: ''
        },

        user_thin: {
            uses: 'edirectory, user',
            notes: ''
        },

        profile_thin: {
            uses: 'user, list',
            notes: ''
        },

        profile_2_thin: {
            uses: 'user, page',
            notes: ''
        },

        auditor_thin: {
            uses: 'user, check',
            notes: ''
        },

        admin_thin: {
            uses: 'user, monitor, device, computer',
            notes: ''
        },

        admin_super_thin: {
            uses: 'user, monitor, device, computer',
            notes: ''
        },

        support_thick: {
            uses: '',
            notes: ''
        },

        chart: {
            uses: '',
            notes: ''
        },

        admin_user_audit: {
            uses: '',
            notes: ''
        },

        admin_user_regular: {
            uses: '',
            notes: ''
        },

        admin_user_super: {
            uses: '',
            notes: ''
        },

        admin_user_view: {
            uses: '',
            notes: ''
        },

        question_mark: {
            uses: '',
            notes: ''
        },

        upload_cloud: {
            uses: '',
            notes: ''
        },

        upload_generic: {
            uses: 'load, upload',
            notes: ''
        },

        team: {
            uses: '',
            notes: ''
        },

        role: {
            uses: '',
            notes: ''
        },

        role_manage: {
            uses: '',
            notes: ''
        },

        all_users: {
            uses: '',
            notes: ''
        },

        relationship: {
            uses: '',
            notes: ''
        },

        password_policy_thick: {
            uses: '',
            notes: ''
        },

        tools: {
            uses: '',
            notes: ''
        },

        comment_user_thick: {
            uses: '',
            notes: ''
        },

        filter_adv: {
            uses: '',
            notes: ''
        },

        comment_sys_thick: {
            uses: '',
            notes: ''
        },

        provision_request_def: {
            uses: '',
            notes: ''
        },

        server_general_thick: {
            uses: 'edirectory',
            notes: ''
        },

        server_general_thin: {
            uses: 'edirectory',
            notes: ''
        },

        server_virtual_thick: {
            uses: '',
            notes: ''
        },

        sys_linux: {
            uses: '',
            notes: ''
        },

        sys_unix: {
            uses: '',
            notes: ''
        },

        sys_windows: {
            uses: '',
            notes: ''
        },

        server_virtual_thin: {
            uses: '',
            notes: ''
        },

        app_thick: {
            uses: '',
            notes: ''
        },

        cloud: {
            uses: '',
            notes: ''
        },

        database: {
            uses: '',
            notes: ''
        },

        app_thin: {
            uses: '',
            notes: ''
        },

        password_thick: {
            uses: '',
            notes: ''
        },

        password_policy_thin: {
            uses: '',
            notes: ''
        },

        signin: {
            uses: '',
            notes: ''
        },

        admin_new_user: {
            uses: '',
            notes: ''
        },

        password_forgot_thick: {
            uses: '',
            notes: ''
        },

        password_forgot_thin: {
            uses: '',
            notes: ''
        },

        number_1: {
            uses: '',
            notes: ''
        },

        number_2: {
            uses: '',
            notes: ''
        },

        number_3: {
            uses: '',
            notes: ''
        },

        number_4 : {
            uses: '',
            notes: ''
        },

        number_5: {
            uses: '',
            notes: ''
        },

        number_6: {
            uses: '',
            notes: ''
        },

        number_7: {
            uses: '',
            notes: ''
        },

        number_8 : {
            uses: '',
            notes: ''
        },

        number_9: {
            uses: '',
            notes: ''
        },

        strength1: {
            uses: '',
            notes: ''
        },

        strength2: {
            uses: '',
            notes: ''
        },

        strength3: {
            uses: '',
            notes: ''
        },

        strength4: {
            uses: '',
            notes: ''
        },

        strength5: {
            uses: '',
            notes: ''
        },
  
        open_in_window: {
            uses: '',
            notes: ''
        },
        queue_list: {
            uses: '',
            notes: ''
        },
        queue_list_add: {
            uses: '',
            notes: ''
        },
        sync: {
            uses: '',
            notes: ''
        },
        publish: {
            uses: '',
            notes: ''
        },
        move: {
            uses: '',
            notes: ''
        },
        password_configure: {
            uses: '',
            notes: ''
        },
        password_role_based: {
            uses: '',
            notes: ''
        },
        search_advanced: {
            uses: '',
            notes: ''
        },
        share: {
            uses: '',
            notes: ''
        },
        copy_duplicate: {
            uses: '',
            notes: ''
        },
        show_all: {
            uses: '',
            notes: 'list control'
        },
        separation_of_duties: {
            uses: '',
            notes: ''
        },
        network: {
            uses: '',
            notes: ''
        },
        microphone: {
            uses: '',
            notes: ''
        },
        swisscom_mobile_id: {
            uses: '',
            notes: ''
        },
        bankid: {
            uses: '',
            notes: ''
        },
        security_questions: {
            uses: '',
            notes: 'set new password'
        },
        secure_identity: {
            uses: 'secure identity, secure user',
            notes: ''
        },
        pki_public_key: {
            uses: '',
            notes: ''
        },
        facial_recognition: {
            uses: '',
            notes: ''
        },
        bluetooth: {
            uses: '',
            notes: ''
        },
        usb: {
            uses: '',
            notes: ''
        },
        card_chip: {
            uses: '',
            notes: ''
        },
        password_ldap: {
            uses: '',
            notes: ''
        },
        password_emergency: {
            uses: '',
            notes: ''
        },
        database_search: {
            uses: '',
            notes: ''
        },
        status_new: {
            uses: '',
            notes: ''
        },
        status_edited: {
            uses: '',
            notes: ''
        },
        status_deleted: {
            uses: '',
            notes: ''
        },
        contract_all: {
            uses: 'close all',
            notes: 'list control'
        },
        expand_all: {
            uses: 'open all',
            notes: 'list control'
        },
        page_simple: {
            uses: '',
            notes: ''
        },
        page_complex: {
            uses: '',
            notes: ''
        },
        policy: {
            uses: '',
            notes: ''
        },
        policy_certificate: {
            uses: 'certificate policy',
            notes: ''
        },
        policy_rules: {
            uses: 'policy rules, rights',
            notes: ''
        },
        parameters: {
            uses: 'parameters, preferences',
            notes: ''
        },
        user_history: {
            uses: '',
            notes: ''
        },
        directory_tree: {
            uses: 'edirectory',
            notes: ''
        },
        directory_org: {
            uses: 'edirectory',
            notes: ''
        },
        directory_org_unit: {
            uses: 'edirectory',
            notes: ''
        },
        certificate_manage: {
            uses: '',
            notes: ''
        },
        rights: {
            uses: 'edirectory',
            notes: ''
        },
        printer: {
            uses: 'edirectory',
            notes: ''
        },
        tag: {
            uses: '',
            notes: ''
        },
        numeric_code: {
            uses: 'code',
            notes: ''
        },
        search_reports: {
            uses: '',
            notes: 'report, search'
        },
        secure_web: {
            uses: '',
            notes: 'world, lock'
        },
        dir_NDSPKI_trusted_root_object: {
            uses: 'edirectory',
            notes: ''
        },
        dir_NDSPKI_trusted_root: {
            uses: 'edirectory',
            notes: ''
        },
        dir_NDSPKI_certificate_authority: {
            uses: 'edirectory',
            notes: ''
        },
        dir_NDSPKI_key_material: {
            uses: 'edirectory',
            notes: ''
        },
        dir_NDSPKI_SDkey_list: {
            uses: 'edirectory',
            notes: ''
        },
        dir_NDSPKI_SDkeyAccess_container: {
            uses: 'edirectory',
            notes: ''
        },
        dir_SASsecurity: {
            uses: 'edirectory',
            notes: ''
        },
        dir_SASservice: {
            uses: 'edirectory',
            notes: ''
        },
        dir_MASVsecurity_policy: {
            uses: 'edirectory',
            notes: ''
        },
        dir_SASlogin_method_container: {
            uses: 'edirectory',
            notes: ''
        },
        edit_doc: {
            uses: '',
            notes: 'edit, document'
        },
        save_disk: {
            uses: '',
            notes: 'save, disk'
        },
        phone_keypad: {
            uses: '',
            notes: 'phone, key'
        },
        keypad: {
            uses: '',
            notes: 'key'
        },
        dir_external_entity: {
            uses: 'edirectory',
            notes: 'entity'
        },
        dir_object_bindery: {
            uses: 'edirectory',
            notes: 'object, bindery'
        },
        dir_queue_bindery: {
            uses: 'edirectory',
            notes: 'queue, bindery'
        },
        dir_group_message_routing: {
            uses: 'edirectory',
            notes: 'group, message, route'
        },
        dir_group_dynamic: {
            uses: 'edirectory',
            notes: 'group, dynamic'
        },
        dir_list: {
            uses: 'edirectory',
            notes: 'list'
        },
        dir_object: {
            uses: 'edirectory',
            notes: ''
        },
        dir_template: {
            uses: 'edirectory',
            notes: ''
        },
        dir_server_ncp: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_server_afp: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_server_http: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_server_messaging: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_server_print: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_replica: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_replica_encrypted: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_server_ldap: {
            uses: 'edirectory',
            notes: 'server'
        },
        dir_ndsPredicate_stats: {
            uses: 'edirectory',
            notes: ''
        },
        dir_schema: {
            uses: 'edirectory',
            notes: ''
        },
        dir_schema_attribute: {
            uses: 'edirectory',
            notes: ''
        },
        dir_schema_attribute_encrypted: {
            uses: 'edirectory',
            notes: ''
        },
        dir_org_person: {
            uses: 'edirectory',
            notes: ''
        },
        dir_person: {
            uses: 'edirectory',
            notes: ''
        },
        dir_profile_ldap: {
            uses: 'edirectory',
            notes: ''
        },
        dir_profile: {
            uses: 'edirectory',
            notes: ''
        },
        dir_mapping: {
            uses: 'edirectory',
            notes: ''
        },
        dir_volume: {
            uses: 'edirectory',
            notes: ''
        },
        dir_group_ldap: {
            uses: 'edirectory',
            notes: ''
        },
        dir_country: {
            uses: 'edirectory',
            notes: ''
        },
        dir_locality: {
            uses: 'edirectory',
            notes: ''
        },
        dir_app_process: {
            uses: 'edirectory',
            notes: ''
        },
        code_1: {
            uses: 'edirectory',
            notes: ''
        },
        dir_SASlogin_policy: {
            uses: 'edirectory',
            notes: ''
        },
        dir_details: {
            uses: 'edirectory',
            notes: ''
        },
        dir_LDAP: {
            uses: 'edirectory',
            notes: ''
        },
        security: {
            uses: '',
            notes: ''
        },
        security_lock: {
            uses: '',
            notes: ''
        },
        security_policy: {
            uses: '',
            notes: ''
        },
        phone_message: {
            uses: '',
            notes: 'phone'
        },
        edit_small: {
            uses: '',
            notes: 'edit, pencil'
        },
        permission_request: {
            uses: '',
            notes: 'phone, message'
        },
        dir_DN_query: {
            uses: 'edirectory',
            notes: ''
        },
        dynamic_entity: {
            uses: 'edirectory',
            notes: ''
        },
        data_item: {
            uses: '',
            notes: ''
        },
        data_item_mapping: {
            uses: '',
            notes: ''
        },
        dir_DN_display: {
            uses: 'edirectory',
            notes: ''
        },
        label_element: {
            uses: '',
            notes: ''
        },
        title_element: {
            uses: '',
            notes: ''
        },
    });