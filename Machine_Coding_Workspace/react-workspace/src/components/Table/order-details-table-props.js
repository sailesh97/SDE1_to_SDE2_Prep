const props = {
    "order": "asc",
    "rowKey": "order_line_key",
    "selectedRowKey": null,
    "rowsPerPage": 9007199254740991,
    "orderBy": "type",
    "tableData": {
        "header": [
            {
                "key": "item_id",
                "name": "Product Details",
                "output": (arg1, arg2, arg3) => {
                    // console.log('Product Details args---', arg1, arg2, arg3)
                    return <>{arg1}</>
                }
            },
            {
                "key": "type",
                "name": "Fulfillment Type",
                "output": (arg1, arg2, arg3) => {
                    // console.log('Fulfillment Type args---', arg1)
                   return <>{arg1}</>

                }
            },
            {
                "key": "fulfillment_date",
                "name": "Fulfillment Date",
                "output": (arg1, arg2, arg3) => {
                    // console.log('Fulfillment Date args---', arg1)

                    return <>{arg1}</>

                }
            },
            {
                "key": "fulfillment_location",
                "name": "Fulfillment Location",
                "output": (arg1, arg2, arg3) => {
                    // console.log('Fulfillment Location args---', arg1)

                    return <>{arg1}</>

                }
            },
            {
                "key": "poToVendor",
                "name": "PO #",
                "output": (arg1, arg2, arg3) => {
                    // console.log('PO # args---', arg1)

                    return <>{arg1}</>

                }
            },
            {
                "key": "invoice_no",
                "name": "Invoice #",
                "output": (arg1, arg2, arg3) => {
                    // console.log('PO # args---', arg1)
                    return <>{arg1}</>
                    
                }
            },
            {
                "key": "status",
                "name": "Status",
                "output": (arg1, arg2, arg3) => {
                    // console.log('Status args---', arg1)

                    return <>{arg1}</>

                }
            }
        ],
        "body": [
            {
                "categories": [
                    "SINK_CADDIES"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": null,
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": "N",
                "allApptsForOrder": [
                    "12/25/202510:002025112804335582302209106"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": "999960275",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "17.36",
                "unlocked_unit_price": "2.48",
                "unit_price": "2.48",
                "unit_cost": "0.49",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "1.77",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "19.13",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "1",
                "ordered_quantity": "7",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.0020",
                "status": "Ready for Pick ",
                "staging_location": [
                    ""
                ],
                "fulfillment_location_item_details": "6338,  \n2003 W Us Highway 421, \nWilkesboro, NC 28697",
                "fulfillment_date_line_item": "12/25/2025 10:00 am - 10:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "1315 13TH AVE S",
                    "address_line_2": "",
                    "city": "SEATTLE",
                    "state": "WA",
                    "zipcode": "98144",
                    "latitude": "47.37709",
                    "longitude": "-122.31541",
                    "country": "US",
                    "address_key": "TEMP_13dpll",
                    "is_address_verified": "Y",
                    "is_commercial_address": "Y",
                    "first_name": "q",
                    "last_name": "w"
                },
                "deliver_addressLines": "1315 13TH AVE S, \nSEATTLE, WA 98144",
                "item_type": "RGL",
                "min_line_status": "3350.0020",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "6338",
                "order_line_key": "2025112804323058104479365",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "757585",
                    "omni_item_id": "999960275",
                    "is_type2": false,
                    "full_item_id": "757585_30112L",
                    "item_desc": "Plastic Freestanding Sink Caddy",
                    "model_no": "30112L",
                    "quantity": "7",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "2.48",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "2025112804323058104479364",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 7,
                "allow_change_fulfillment_option": "Y",
                "item_id": 757585,
                "line_unit_price": 2.48,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-25T10:00:00-05:00",
                "fulfillment_location": "6338",
                "fulfillment_date": "Appt 12025-12-25T10:00-05:00 - 2025-12-25T22:00-05:00",
                "refactoredFulDate": "Appt 1\n12/25/2025\n10:00 am - 10:00 pm",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready for Pick",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "2003 W Us Highway 421",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Wilkesboro",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28697"
                            },
                            "node_type": null,
                            "node_id": "6338",
                            "description": null
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-25T10:00-05:00",
                        "appt_end_date": "2025-12-25T22:00-05:00",
                        "appt_key": "2025112804335582302209106",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "7",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1127763",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": null,
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025112804335581701222090",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "2",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1001146600"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "695",
                "model_no": "30112L",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": {
                        "allow": "N",
                        "disable_reason": null
                    }
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "7",
                        "item_id": "757585",
                        "requested_qty": "7",
                        "ftc_cancel_date": "2026-01-24T22:00-05:00",
                        "next_promise_date": "2025-12-25T22:00-05:00",
                        "promise_date": "2025-12-25T22:00-05:00",
                        "first_promise_date": "2025-12-25T22:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-11-28T06:00-05:00"
            },
            {
                "categories": [],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": null,
                "international_sale": null,
                "item_behaviors": [],
                "allow_change_fulfillment_pick_to_gig": "N",
                "allApptsForOrder": [
                    "12/25/202510:002025112804335582302209106"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": null,
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "85.00",
                "unlocked_unit_price": "85.00",
                "unit_price": "85.00",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "85.00",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "",
                "item_group_code": "DS",
                "jobDetails": null,
                "prime_line_no": "2",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [],
                "line_type": "-",
                "line_status": "1100",
                "status": "Created ",
                "staging_location": [],
                "fulfillment_location_item_details": "6338,  \n2003 W Us Highway 421, \nWilkesboro, NC 28697",
                "fulfillment_date_line_item": " 12/25/2025",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "1315 13TH AVE S",
                    "address_line_2": "",
                    "city": "SEATTLE",
                    "state": "WA",
                    "zipcode": "98144",
                    "latitude": "47.37709",
                    "longitude": "-122.31541",
                    "country": "US",
                    "address_key": "TEMP_13dpll",
                    "is_address_verified": "Y",
                    "is_commercial_address": "Y",
                    "first_name": "q",
                    "last_name": "w"
                },
                "deliver_addressLines": "1315 13TH AVE S, \nSEATTLE, WA 98144",
                "item_type": "DS",
                "min_line_status": "1100",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "6338",
                "order_line_key": "2025112804323058104479364",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "2",
                    "omni_item_id": "-",
                    "is_type2": false,
                    "full_item_id": "2_30112L",
                    "item_desc": "Delivery Service",
                    "model_no": "",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "DS",
                    "line_unit_price": "85.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 2,
                "line_unit_price": 85,
                "type": "Service/Fee",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-25T10:00:00-05:00",
                "fulfillment_location": "-",
                "fulfillment_date": "2025-12-25T10:00:00-05:00",
                "refactoredFulDate": "-",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Created",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "2003 W Us Highway 421",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Wilkesboro",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28697"
                            },
                            "node_type": null,
                            "node_id": "6338",
                            "description": null
                        }
                    ]
                },
                "appointments": [],
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "2025112804323058104479365",
                        "parent_prime_line_no": null
                    }
                ],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "695",
                "model_no": "30112L",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    }
                },
                "extended_protection_plan_reference": "-",
                "releases": [],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-11-28T06:00-05:00"
            }
        ]
    },
    "pagination": false,
    "classes": "tableWrapper",
    "tableHeight": 580,
    "serviceHeaders": [
        {
            "key": "child_order_line_item_desc",
            "name": "Product Details"
        },
        {
            "key": "type",
            "name": "Fulfillment Type"
        },
        {
            "key": "fulfillment_date",
            "name": "Fulfillment Date"
        },
        {
            "key": "fulfillment_location",
            "name": "Fulfillment Location"
        },
        {
            "key": "vendor_po_no",
            "name": "PO #"
        },
        {
            "key": "invoice_no",
            "name": "Invoice #"
        },
        {
            "key": "status",
            "name": "Status"
        }
    ],
    "tabIndexValue": 0,
    "showLoader": false,
    "noOfRowsInLoader": 4,
    "orderData": {
        "omniItemIdMapper": {
            "2": null,
            "757585": "999960275"
        },
        "disable_all_mods": "N",
        "is_history": null,
        "originalBillToAddress": {
            "address_line_1": "1315 13TH AVE S",
            "address_line_2": "",
            "city": "SEATTLE",
            "state": "WA",
            "zipcode": "98144",
            "country": "US"
        },
        "billing_address": "SEATTLE, WA 98144",
        "billing_street": "1315 13TH AVE S, ",
        "bush_pilot_sale": false,
        "quote_description": "",
        "project_description": null,
        "refund_order_no": null,
        "business": "-",
        "business_channel": "DIGITAL_LOWESDESKTOP",
        "customer_po": "-",
        "discount": "$0.00",
        "email": "test@lowes.com",
        "fees": "$0.00",
        "delivery_fees": [
            "85.00"
        ],
        "shipping_fee": null,
        "logged_in_store": "6338",
        "first_name": "q",
        "last_name": "w",
        "order_no": "10732423204132",
        "display_order_no": "10732423204132",
        "display_order_label": "Order# ",
        "logged_in_user_id": "80100109",
        "order_source": "Orbit Order",
        "order_status": "Ready for Pick",
        "payment_status": "AUTHORIZED",
        "payment_total": "$104.13",
        "payment_methods": {
            "payment_method": [
                {
                    "display_card_number": "5454",
                    "credit_card_type": null,
                    "max_charge_limit": "104.13",
                    "payment_type": "CREDIT_CARD_MTL",
                    "payment_reference_1": "HANDKEYED",
                    "credit_card_number": null,
                    "display_payment_identifier": "M/C",
                    "unlimited_charges": "Y",
                    "expiry": "1225",
                    "total_charged": "0.00",
                    "check_no": "",
                    "check_reference": "",
                    "payment_key": "2025112804323061002716490",
                    "card_holder_name": null,
                    "is_card_suspended": "false",
                    "total_authorized": "104.13",
                    "total_refund_amount": "0.00",
                    "card_type": "M/C",
                    "card_number": "545454WKOAFW5454",
                    "zipcode": null,
                    "has_payment_failure": "false",
                    "is_payment_method_removable": "false",
                    "recurring_reference": "",
                    "transaction_type": null,
                    "allow_retry_auth_failure": "N",
                    "open_authorizations": []
                }
            ]
        },
        "unformatted_phone": "9989887678",
        "phone": "(998) 988 - 7678",
        "order_purpose": "-",
        "preferred_contact": "",
        "pro_customer": "No",
        "sales_channel": "LOWES_COM",
        "eligible_project_ids": [],
        "allow_change_fulfillment_pick_to_gig": "N",
        "channel_id": "LOWES_COM",
        "terminal_number": "087",
        "sales_date": "11/28/2025, 2:58 PM EST",
        "selling_location": "-",
        "selling_location_addLine": "6594",
        "orderDetailsTableData": [
            {
                "categories": [
                    "SINK_CADDIES"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": null,
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": "N",
                "allApptsForOrder": [
                    "12/25/202510:002025112804335582302209106"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": "999960275",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "17.36",
                "unlocked_unit_price": "2.48",
                "unit_price": "2.48",
                "unit_cost": "0.49",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "1.77",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "19.13",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "1",
                "ordered_quantity": "7",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.0020",
                "status": "Ready for Pick ",
                "staging_location": [
                    ""
                ],
                "fulfillment_location_item_details": "6338,  \n2003 W Us Highway 421, \nWilkesboro, NC 28697",
                "fulfillment_date_line_item": "12/25/2025 10:00 am - 10:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "1315 13TH AVE S",
                    "address_line_2": "",
                    "city": "SEATTLE",
                    "state": "WA",
                    "zipcode": "98144",
                    "latitude": "47.37709",
                    "longitude": "-122.31541",
                    "country": "US",
                    "address_key": "TEMP_13dpll",
                    "is_address_verified": "Y",
                    "is_commercial_address": "Y",
                    "first_name": "q",
                    "last_name": "w"
                },
                "deliver_addressLines": "1315 13TH AVE S, \nSEATTLE, WA 98144",
                "item_type": "RGL",
                "min_line_status": "3350.0020",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "6338",
                "order_line_key": "2025112804323058104479365",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "757585",
                    "omni_item_id": "999960275",
                    "is_type2": false,
                    "full_item_id": "757585_30112L",
                    "item_desc": "Plastic Freestanding Sink Caddy",
                    "model_no": "30112L",
                    "quantity": "7",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "2.48",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "2025112804323058104479364",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 7,
                "allow_change_fulfillment_option": "Y",
                "item_id": 757585,
                "line_unit_price": 2.48,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-25T10:00:00-05:00",
                "fulfillment_location": "6338",
                "fulfillment_date": "Appt 12025-12-25T10:00-05:00 - 2025-12-25T22:00-05:00",
                "refactoredFulDate": "Appt 1\n12/25/2025\n10:00 am - 10:00 pm",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready for Pick",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "2003 W Us Highway 421",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Wilkesboro",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28697"
                            },
                            "node_type": null,
                            "node_id": "6338",
                            "description": null
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-25T10:00-05:00",
                        "appt_end_date": "2025-12-25T22:00-05:00",
                        "appt_key": "2025112804335582302209106",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "7",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1127763",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": null,
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025112804335581701222090",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "2",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1001146600"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "695",
                "model_no": "30112L",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": {
                        "allow": "N",
                        "disable_reason": null
                    }
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "7",
                        "item_id": "757585",
                        "requested_qty": "7",
                        "ftc_cancel_date": "2026-01-24T22:00-05:00",
                        "next_promise_date": "2025-12-25T22:00-05:00",
                        "promise_date": "2025-12-25T22:00-05:00",
                        "first_promise_date": "2025-12-25T22:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-11-28T06:00-05:00"
            },
            {
                "categories": [],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": null,
                "international_sale": null,
                "item_behaviors": [],
                "allow_change_fulfillment_pick_to_gig": "N",
                "allApptsForOrder": [
                    "12/25/202510:002025112804335582302209106"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": null,
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "85.00",
                "unlocked_unit_price": "85.00",
                "unit_price": "85.00",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "85.00",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "",
                "item_group_code": "DS",
                "jobDetails": null,
                "prime_line_no": "2",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [],
                "line_type": "-",
                "line_status": "1100",
                "status": "Created ",
                "staging_location": [],
                "fulfillment_location_item_details": "6338,  \n2003 W Us Highway 421, \nWilkesboro, NC 28697",
                "fulfillment_date_line_item": " 12/25/2025",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "1315 13TH AVE S",
                    "address_line_2": "",
                    "city": "SEATTLE",
                    "state": "WA",
                    "zipcode": "98144",
                    "latitude": "47.37709",
                    "longitude": "-122.31541",
                    "country": "US",
                    "address_key": "TEMP_13dpll",
                    "is_address_verified": "Y",
                    "is_commercial_address": "Y",
                    "first_name": "q",
                    "last_name": "w"
                },
                "deliver_addressLines": "1315 13TH AVE S, \nSEATTLE, WA 98144",
                "item_type": "DS",
                "min_line_status": "1100",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "6338",
                "order_line_key": "2025112804323058104479364",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "2",
                    "omni_item_id": "-",
                    "is_type2": false,
                    "full_item_id": "2_30112L",
                    "item_desc": "Delivery Service",
                    "model_no": "",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "DS",
                    "line_unit_price": "85.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 2,
                "line_unit_price": 85,
                "type": "Service/Fee",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-25T10:00:00-05:00",
                "fulfillment_location": "-",
                "fulfillment_date": "2025-12-25T10:00:00-05:00",
                "refactoredFulDate": "-",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Created",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "2003 W Us Highway 421",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Wilkesboro",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28697"
                            },
                            "node_type": null,
                            "node_id": "6338",
                            "description": null
                        }
                    ]
                },
                "appointments": [],
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "2025112804323058104479365",
                        "parent_prime_line_no": null
                    }
                ],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "695",
                "model_no": "30112L",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    }
                },
                "extended_protection_plan_reference": "-",
                "releases": [],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-11-28T06:00-05:00"
            }
        ],
        "raw_order_lines": [
            {
                "allow_change_fulfillment_pick_to_gig": "N",
                "item_behaviors": [
                    "Regular"
                ],
                "categories": [
                    "SINK_CADDIES"
                ],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "expected_availability_days": "0",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "6338",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "7",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": "999960275",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "7",
                        "item_id": "757585",
                        "requested_qty": "7",
                        "ftc_cancel_date": "2026-01-24T22:00-05:00",
                        "next_promise_date": "2025-12-25T22:00-05:00",
                        "promise_date": "2025-12-25T22:00-05:00",
                        "first_promise_date": "2025-12-25T22:00-05:00"
                    }
                ],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "19.13",
                "taxes": [
                    {
                        "total_amount": "1.77",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "N",
                "line_subtotal": "17.36",
                "unlocked_unit_price": "2.48",
                "is_item_non_discountable": null,
                "discounts": [],
                "allow_change_fulfillment_option": "Y",
                "delivery_method": "DEL",
                "fulfillment_date": "2025-12-25T10:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "6338",
                "staging_location": [
                    ""
                ],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "0.49",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": "LOWES_DELIVERY",
                "invoice_nos": null,
                "item_desc": "Plastic Freestanding Sink Caddy",
                "item_id": "757585",
                "full_item_id": "757585_30112L",
                "item_type": "RGL",
                "unit_price": "2.48",
                "model_no": "30112L",
                "ordered_quantity": "7",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "2025112804323058104479365",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": "3.2",
                "unit_height": "6.3",
                "prime_line_no": "1",
                "category_id": null,
                "product_ship_date": "2025-11-28T06:00-05:00",
                "unit_of_measure": null,
                "item_weight": "0.09",
                "min_line_status": "3350.0020",
                "item_group_code": "PROD",
                "is_type2": false,
                "quote_type": "",
                "job_details": null,
                "line_status": "3350.0020",
                "shipment_status": null,
                "line_type": "STK",
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": "695",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [
                    {
                        "appt_start_date": "2025-12-25T10:00-05:00",
                        "appt_end_date": "2025-12-25T22:00-05:00",
                        "appt_key": "2025112804335582302209106",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "7",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1127763",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": null,
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025112804335581701222090",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "2",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1001146600"
                    }
                ],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "1315 13TH AVE S",
                    "address_line_2": "",
                    "city": "SEATTLE",
                    "state": "WA",
                    "zipcode": "98144",
                    "latitude": "47.37709",
                    "longitude": "-122.31541",
                    "country": "US",
                    "address_key": "TEMP_13dpll",
                    "is_address_verified": "Y",
                    "is_commercial_address": "Y",
                    "first_name": "q",
                    "last_name": "w"
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "2025112804323058104479364",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "orderline_shipnode": {
                    "shipnode_person_info": {
                        "address_line_1": "2003 W Us Highway 421",
                        "address_line_2": null,
                        "state": "NC",
                        "city": "Wilkesboro",
                        "country": "US",
                        "day_phone": "7049805000",
                        "zipcode": "28697"
                    },
                    "node_type": null,
                    "node_id": "6338",
                    "description": null
                },
                "status": "Ready for Pick",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [],
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": {
                        "allow": "N",
                        "disable_reason": null
                    }
                },
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellation_allowed_only_with_parent": "N"
            },
            {
                "allow_change_fulfillment_pick_to_gig": "N",
                "item_behaviors": [],
                "categories": [],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "expected_availability_days": "0",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "6338",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "7",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": null,
                "releases": [],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "85.00",
                "taxes": [],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "N",
                "line_subtotal": "85.00",
                "unlocked_unit_price": "85.00",
                "is_item_non_discountable": null,
                "discounts": [],
                "allow_change_fulfillment_option": "N",
                "delivery_method": "",
                "fulfillment_date": "2025-12-25T10:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "6338",
                "staging_location": [],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "0.00",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": null,
                "invoice_nos": null,
                "item_desc": "Lowes Delivery Service Item",
                "item_id": "2",
                "full_item_id": "2_30112L",
                "item_type": "DS",
                "unit_price": "85.00",
                "model_no": "30112L",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "2025112804323058104479364",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": null,
                "unit_height": null,
                "prime_line_no": "2",
                "category_id": null,
                "product_ship_date": "2025-11-28T06:00-05:00",
                "unit_of_measure": null,
                "item_weight": null,
                "min_line_status": "1100",
                "item_group_code": "DS",
                "is_type2": false,
                "quote_type": "",
                "job_details": null,
                "line_status": "1100",
                "shipment_status": null,
                "line_type": null,
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": "695",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "1315 13TH AVE S",
                    "address_line_2": "",
                    "city": "SEATTLE",
                    "state": "WA",
                    "zipcode": "98144",
                    "latitude": "47.37709",
                    "longitude": "-122.31541",
                    "country": "US",
                    "address_key": "TEMP_13dpll",
                    "is_address_verified": "Y",
                    "is_commercial_address": "Y",
                    "first_name": "q",
                    "last_name": "w"
                },
                "child_relationships": [],
                "orderline_shipnode": {
                    "shipnode_person_info": {
                        "address_line_1": "2003 W Us Highway 421",
                        "address_line_2": null,
                        "state": "NC",
                        "city": "Wilkesboro",
                        "country": "US",
                        "day_phone": "7049805000",
                        "zipcode": "28697"
                    },
                    "node_type": null,
                    "node_id": "6338",
                    "description": null
                },
                "status": "Created",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "2025112804323058104479365",
                        "parent_prime_line_no": null
                    }
                ],
                "so_shipment_lines": null,
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    }
                },
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellation_allowed_only_with_parent": "N"
            }
        ],
        "alternatePickupPeople": {},
        "active_del_line_exists": "Y",
        "sortedAppointments": [
            "12/25/202510:002025112804335582302209106"
        ],
        "services": "$85.00 ",
        "sub_total": "$17.36 ",
        "tax": "$1.77 ",
        "text_opt_in": "(998) 988 - 7678",
        "tems_id": "-",
        "invoice_no": "92983",
        "transaction": "-",
        "notes": {
            "note": [
                {
                    "contact_time": "2025-12-22T12:17:57.348784350-05:00",
                    "contact_user": "",
                    "note_text": "Lowes Delivery Schedule Reminder email has been sent to customer at email address, \"test@lowes.com\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-12-22T12:17:57.268670406-05:00",
                    "contact_user": "",
                    "note_text": "Lowes Delivery Schedule Reminder text message has been sent to customer at phone number, \"9989887678\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-11-27T23:33:55.891558971-05:00",
                    "contact_user": "DelScheduler",
                    "note_text": "Delivery optimization done",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-11-27T23:32:36.453887298-05:00",
                    "contact_user": "",
                    "note_text": "Order Placement Confirmation email has been sent to customer at email address, \"test@lowes.com\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-11-27T23:32:36.183479973-05:00",
                    "contact_user": "",
                    "note_text": "Order Placement Confirmation text message has been sent to customer at phone number, \"9989887678\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                }
            ]
        },
        "events": {
            "event": [],
            "number_of_events": 0
        },
        "deliveryAppointments": [
            {
                "apptString": "Appt 1",
                "appointmentDate": "12/25/2025",
                "startTime": "10:00 AM",
                "endTime": "10:00 PM",
                "index": 0,
                "apptData": {
                    "appt_start_date": "2025-12-25T10:00-05:00",
                    "appt_end_date": "2025-12-25T22:00-05:00",
                    "appt_key": "2025112804335582302209106",
                    "timezone": "EST5EDT",
                    "delivery_instruction": null,
                    "quantity": "7",
                    "appt_status": "OPEN",
                    "description": "Ready for Pick",
                    "installer_name": null,
                    "installer_phone_no": null,
                    "installer_pmoc": null,
                    "installer_email": null,
                    "installer_fax": null,
                    "work_order_no": "1127763",
                    "appt_seq_no": "1",
                    "delivery_status": "Scheduled",
                    "delivery_sub_status": null,
                    "lws_truck_type": "Box Truck",
                    "work_order_status": "1100.6000",
                    "work_order_key": "2025112804335581701222090",
                    "is_appointment_eligible": "Y",
                    "is_post_invoice_scenario": null,
                    "work_order_modified": null,
                    "hard_reservation_done": "Y",
                    "ds_prime_line_no": "2",
                    "appointment_type": "Default",
                    "max_appt_seq_no": "1",
                    "delivery_id": "1001146600"
                }
            }
        ],
        "order_header_key": "2025112804323057605990337",
        "is_military": "N",
        "pro_indicator": "No",
        "is_employee": "N",
        "entry_type": "LOWES_COM",
        "document_type": "0001",
        "omnia_mod_hold_applied": "N",
        "full_cancellation_allowed": "Y",
        "allow_schedule_appointment_later": "N",
        "display_lock_icon": "N",
        "has_pending_changes": "N",
        "loyalty_reward": null,
        "international_sale": null,
        "partial_payment_details": [],
        "extn_order_type": "STANDARD",
        "only_full_cancellation_allowed": "N",
        "allow_change_del_instr": "Y",
        "allow_change_del_address": "Y",
        "multiple_del_instr": "N",
        "allow_change_del_appt": "Y",
        "multiple_del_address": "N",
        "shipping_address1": "1315 13TH AVE S, ",
        "shipping_address2": "SEATTLE, WA 98144",
        "shipAddress_firstName": "q",
        "shipAddress_lastName": "w",
        "full_delivery_address": {
            "address_line_1": "1315 13TH AVE S",
            "address_line_2": "",
            "city": "SEATTLE",
            "state": "WA",
            "zipcode": "98144",
            "latitude": "47.37709",
            "longitude": "-122.31541",
            "country": "US",
            "address_key": "TEMP_13dpll",
            "is_address_verified": "Y",
            "is_commercial_address": "Y",
            "first_name": "q",
            "last_name": "w",
            "city_state_zip": "SEATTLE, WA 98144"
        },
        "delivery_instruction": "-",
        "editDeliveryInstruction": "",
        "isOrderHasLD": true,
        "isOrderHasDD": false,
        "isOrderHasPD": false,
        "appointments": [
            {
                "appointment_id": "31d8492c-7e8a-4e84-a8a2-f0b0fae67453",
                "appt_start_date": "2025-12-25T10:00-05:00",
                "appt_end_date": "2025-12-25T22:00-05:00",
                "appt_status": "OPEN",
                "appt_key": "2025112804335582302209106",
                "work_order_key": "2025112804335581701222090",
                "lws_truck_type": "Box Truck",
                "work_order_status": "1100.6000",
                "work_order_no": "1127763",
                "is_appointment_eligible": "Y",
                "order_lines": [
                    {
                        "order_line_key": "2025112804323058104479365",
                        "item_id": "757585",
                        "item_desc": "Plastic Freestanding Sink Caddy",
                        "quantity": "7",
                        "model_no": "30112L",
                        "shipment_key": null,
                        "shipment_line_key": null,
                        "status_desc": "Ready for Pick",
                        "delivery_method": "DEL",
                        "fulfillment_location": "6338",
                        "prime_line_no": "1",
                        "line_status": "3350.0020",
                        "min_line_status": "3350.0020",
                        "is_PCR_item": false,
                        "ship_together_no": null
                    }
                ],
                "mod_eligibility": {
                    "schedule_redelivery": {
                        "allow": "N",
                        "disable_reason": [
                            "Not allowed due to order status"
                        ]
                    },
                    "load_to_truck": {
                        "allow": "N",
                        "disable_reason": [
                            "Not in Ready for Customer status.",
                            "Not authorized.",
                            "Available on day of delivery."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Appointment is not eligible for Service Grouping."
                        ]
                    },
                    "post_load_to_truck_correction": {
                        "allow": "N",
                        "disable_reason": [
                            "Post Load To Truck is not possible because of the status of the order"
                        ]
                    },
                    "partial_post_load_to_truck_correction": {
                        "allow": "N",
                        "disable_reason": [
                            "Post load to truck correction is not allowed or Partial post load to truck correction already done.",
                            "Post Load To Truck is not possible because of the status of the order"
                        ]
                    }
                }
            }
        ],
        "isAppointmentModEligible": true,
        "allow_change_fulfillment_option": "Y",
        "isOrderHasPS": false,
        "isOrderHasSOSManual": false,
        "isOrderHasOthers": true,
        "isOrderHasServiceLines": true,
        "price_unlock_allowed": "Y",
        "applicable_price_unlock_subtotal": "$17.36 ",
        "unlocked_subtotal": "$17.36 ",
        "isUserInfoAvailable": false,
        "add_line_allowed": "Y",
        "allow_customer_pickup": "N",
        "allow_change_complete_address": "Y",
        "max_customer_pickup_date": "Unscheduled",
        "all_eligible_pickup_items_available": "Y",
        "has_appeasement_invoice": "N",
        "pickup_availability_date": "",
        "allow_puis_expected_date_change": "N",
        "allow_preferred_method_of_contact_change": "Y",
        "disable_pmoc_change_reason": null,
        "allow_staging_location_change": "Y",
        "disable_staging_location_change_reason": null,
        "associate_thresholds": [],
        "order_hold_types": {
            "order_hold_type": [
                {
                    "hold_type": "MODIFICATION_HOLD",
                    "status": "1300",
                    "extn": {
                        "extn_token": "OmniaStore_80100007_6335"
                    },
                    "reason_text": "CHANGE_DEL_APPT",
                    "last_hold_type_date": "2025-11-28T04:33:55Z",
                    "resolver_user_id": null,
                    "transaction_id": "16ab9309-403b-40db-944a-3419bf315b1d"
                }
            ]
        },
        "isOrderHasReturnLines": false,
        "max_prime_line_no": "2",
        "maxPrimeLineNo": "2",
        "is_delayed_settlement": null,
        "order_date": "2025-11-28T14:58:43.787-05:00",
        "taxExemptionStepId": "",
        "taxExemptioValidFlag": "N",
        "order_capture_location": "6557",
        "original_master_invoice_no": "43517143",
        "return_orders": null,
        "original_business_date": "2025-11-28T00:00:00",
        "original_sales_date": "2025-11-27T23:32:31",
        "sales_order": null,
        "order_with_lws_fraud_reject_hold": "N",
        "merchant_id": null,
        "xTraceId": "d2c86c2c-148b-49a2-9db9-076c3df8629a",
        "allow_change_payment": "Y",
        "pending_auth_amount": "0.00",
        "allow_synchrony_change_payment": "Y",
        "amount_collected": "0.00",
        "allow_pickup_contact_change": "N",
        "disable_pickup_contact_change_reason": "Not allowed due to order status.",
        "pickup_contacts": null,
        "mod_block_reasons": {
            "CANCEL_ORDER": null,
            "CHANGE_DEL_ADDRESS": null,
            "CHANGE_DEL_INSTRUCTION": null,
            "CHANGE_DEL_APPT": null,
            "CHANGE_FULFILLMENT_OPTION": null,
            "PRICE_UNLOCK": null,
            "ADD_ITEM": null,
            "SCH_DEL_APPT": null,
            "MODIFY_PUIS_DATE": null,
            "MODIFY_CUST_PMOC": null,
            "MODIFY_PICKUP_CONTACT": null,
            "CHANGE_PAYMENT": null
        },
        "mod_eligibility": {
            "full_cancellation_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_del_address": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_delivery_address": {
                "allow": "N",
                "disable_reason": [
                    "Adding delivery address is not allowed for non refund fulfilment orders"
                ]
            },
            "allow_change_del_instr": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_del_appt": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_complete_address": {
                "allow": "Y"
            },
            "allow_schedule_appointment_later": {
                "allow": "N",
                "disable_reason": null
            },
            "allow_change_fulfillment_option": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_line_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "price_unlock_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_coupon_promotion": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_staging_location_change": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_pickup_contact_change": {
                "allow": "N",
                "disable_reason": [
                    "No eligible Pick Up Line"
                ]
            },
            "allow_puis_expected_date_change": {
                "allow": "N",
                "disable_reason": [
                    "OrderLine status is Ready for Customer"
                ]
            },
            "allow_customer_pickup": {
                "allow": "N",
                "disable_reason": [
                    "Not allowed due to line status"
                ]
            },
            "allow_preferred_method_of_contact_change": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_payment": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_tax_exemption_modification": null,
            "tax_exemption": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_free_shipping": {
                "allow": "N",
                "disable_reason": [
                    "No active parcel lines on this order"
                ]
            },
            "add_military_discount": {
                "allow": "Y",
                "disable_reason": null
            },
            "schedule_redelivery": {
                "allow": "N",
                "disable_reason": null
            },
            "load_to_truck": {
                "allow": "N",
                "disable_reason": null
            },
            "customer_appeasement": {
                "allow": "Y",
                "disable_reason": null
            },
            "all_modification": {
                "allow": "Y",
                "disable_reason": null
            },
            "only_full_cancellation_allowed": {
                "allow": "N",
                "disable_reason": null
            },
            "allow_external_pickup": {
                "allow": "N",
                "disable_reason": [
                    "Order Line is not in valid status"
                ]
            },
            "allow_change_fulfillment_pick_to_gig": {
                "allow": "N",
                "disable_reason": null
            }
        },
        "organization_code": null,
        "enterprise_code": "LOWES",
        "orderDetailLastUpdatedTime": "12/25/2025 01:17 AM",
        "vsp_indicator": "N",
        "fraud_status": "ACCEPT",
        "cart_type": "SHOPPING",
        "quote_type": "",
        "quote_id": "",
        "outlet_store": "N",
        "spanId": "c95bc5fb-95a7-48bb-9933-98dc4db013f0"
    },
    "groupByProjects": false,
    "showSSTIMileageFee": true
}

export default props;

export const cancellationItemSelection_oneRowChecked = {
    "order": "asc",
    "rowKey": "order_line_key",
    "classes": "tableWrapper",
    "orderBy": "type",
    "tableData": {
        "header": [
            {
                "key": "item_id",
                "name": "Product Details",
                "style": {
                    "width": "25%"
                }
            },
            {
                "key": "cancelQuantity",
                "name": "Quantity \nto Cancel"
            },
            {
                "key": "type",
                "name": "Type",
                "rowHeader": "Fulfillment Type"
            },
            {
                "key": "poNumber",
                "name": "PO #"
            },
            {
                "key": "line_unit_price",
                "name": "Unit Price",
                "align": "right",
                "style": {
                    "paddingRight": "100px",
                    "maxWidth": "220px"
                }
            },
            {
                "key": "status",
                "name": "Status",
                "rowHeader": "Status"
            }
        ],
        "body": [
            {
                "categories": [
                    "WRITING_UTENSILS"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "PRO",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Platinum Pro"
                },
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025121519311358862087628"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "231760060",
                "is_type2": false,
                "quote_type": "ESTIMATE",
                "omni_item_id": "1003094846",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "0.25",
                "unlocked_unit_price": "0.25",
                "unit_price": "0.25",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "0.02",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": "Stock"
                },
                "line_total": "0.27",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "1",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.015",
                "status": "Ready For Customer ",
                "staging_location": [
                    "RCST, Aisle 4, Bay 3"
                ],
                "fulfillment_location_item_details": "2750,  \n",
                "fulfillment_date_line_item": "12/29/2025 08:00 am - 08:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "2121 CHARLOTTE HWY",
                    "address_line_2": null,
                    "city": "MOORESVILLE",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": null,
                    "longitude": null,
                    "country": "US",
                    "address_key": "fa75038f-3997-4bd6-bdfb-6d8eceac5206",
                    "is_address_verified": "N",
                    "is_commercial_address": "N",
                    "first_name": "Mark",
                    "last_name": "Holt"
                },
                "deliver_addressLines": "2121 CHARLOTTE HWY, \nMOORESVILLE, NC 28117",
                "item_type": "RGL",
                "min_line_status": "3350.015",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251215193113558466766193",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "864928",
                    "omni_item_id": "1003094846",
                    "is_type2": false,
                    "full_item_id": "864928_14250",
                    "item_desc": "Carpenter pencil Blue Pencil",
                    "model_no": "14250",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "0.25",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251215193113558466766194",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 864928,
                "line_unit_price": 0.25,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "2750",
                "fulfillment_date": "Appt 12025-12-29T08:00-05:00 - 2025-12-29T20:00-05:00",
                "refactoredFulDate": "Appt 1\n12/29/2025\n08:00 am - 08:00 pm",
                "entryType": "POS",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready For Customer",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": null,
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": null,
                            "node_type": null,
                            "node_id": "2750",
                            "description": null
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025121519311358862087628",
                        "timezone": "EST5EDT",
                        "delivery_instruction": "deliver range from order # 202750338251590834 staged in receiving aisle 4 bay 1 \n\ncall ahead ",
                        "quantity": "1",
                        "appt_status": "OPEN",
                        "description": "Ready For Customer",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018523839",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025121519311358451422198",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "2",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1039657208"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "43096",
                "model_no": "14250",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Mod not allowed for Sourcing Override"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Mod not allowed for Sourcing Override",
                            "Blocking CFO as no eligible lines present"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "1",
                        "item_id": "864928",
                        "requested_qty": "1",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-15T00:00-05:00",
                "isNewUXFlow": true,
                "associatedLines": [],
                "preventSelection": false
            }
        ]
    },
    "pagination": false,
    "showCheckbox": true,
    "onlyFullCancellationAllowed": false,
    "disableCheckBox": false,
    "selectedOrderLines": [
        "20251215193113558466766193"
    ],
    "rowsPerPage": 9007199254740991,
    "serviceHeaders": [
        {
            "key": "child_order_line_item_desc",
            "name": "Product Details"
        },
        {
            "key": "cancelQuantity",
            "name": "Quantity \nto Cancel"
        },
        {
            "key": "type",
            "name": "Type"
        },
        {
            "key": "poNumber",
            "name": "PO #"
        },
        {
            "key": "itemUnitPrice",
            "name": "Unit Price",
            "align": "right",
            "style": {
                "paddingRight": "100px",
                "maxWidth": "220px"
            }
        },
        {
            "key": "status",
            "name": "Status"
        }
    ],
    "selectedServiceLines": [
        "20251215193113558466766193"
    ],
    "totalData": 1,
    "tabIndexValue": 0,
    "showCheckedIcon": true,
    "containerClasses": "add-cancel-table-container",
    "orderData": {
        "omniItemIdMapper": {
            "2": null,
            "864928": "1003094846"
        },
        "disable_all_mods": "N",
        "is_history": null,
        "originalBillToAddress": null,
        "billing_address": null,
        "billing_street": null,
        "bush_pilot_sale": false,
        "quote_description": null,
        "project_description": null,
        "refund_order_no": null,
        "business": "-",
        "business_channel": "STORES_POSAPP",
        "customer_po": "none",
        "discount": "$78.99",
        "email": "holtj1033@gmail.com",
        "fees": "$0.00",
        "delivery_fees": [
            "79.00"
        ],
        "shipping_fee": null,
        "logged_in_store": "2750",
        "first_name": "Jennifer",
        "last_name": "Holt",
        "order_no": "202750349251640214",
        "display_order_no": "202750349251640214",
        "display_order_label": "Order# ",
        "logged_in_user_id": "80100109",
        "order_source": "Orbit Order",
        "order_status": "Ready For Customer",
        "payment_status": "PAID",
        "payment_total": "$0.28",
        "payment_methods": {
            "payment_method": [
                {
                    "display_card_number": "",
                    "credit_card_type": null,
                    "max_charge_limit": "0.28",
                    "payment_type": "CASH_MTL",
                    "payment_reference_1": null,
                    "credit_card_number": null,
                    "display_payment_identifier": "CASH",
                    "unlimited_charges": "N",
                    "expiry": null,
                    "total_charged": "0.28",
                    "check_no": "",
                    "check_reference": "",
                    "payment_key": "20251215193113595186302972",
                    "card_holder_name": null,
                    "is_card_suspended": "false",
                    "total_authorized": "0.00",
                    "total_refund_amount": "0.00",
                    "card_type": "",
                    "card_number": "",
                    "zipcode": null,
                    "has_payment_failure": "false",
                    "is_payment_method_removable": "false",
                    "recurring_reference": "",
                    "transaction_type": null,
                    "allow_retry_auth_failure": "N",
                    "open_authorizations": []
                }
            ]
        },
        "unformatted_phone": "7049021413",
        "phone": "(704) 902 - 1413",
        "order_purpose": "-",
        "preferred_contact": "(704) 902 - 1413",
        "pro_customer": "Yes",
        "sales_channel": "POS",
        "eligible_project_ids": [],
        "allow_change_fulfillment_pick_to_gig": "-",
        "channel_id": "POS",
        "terminal_number": "18",
        "sales_date": "12/15/2025, 2:31 PM EST",
        "selling_location": "2750",
        "selling_location_addLine": "2750",
        "orderDetailsTableData": [
            {
                "categories": [
                    "WRITING_UTENSILS"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "PRO",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Platinum Pro"
                },
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025121519311358862087628"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "231760060",
                "is_type2": false,
                "quote_type": "ESTIMATE",
                "omni_item_id": "1003094846",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "0.25",
                "unlocked_unit_price": "0.25",
                "unit_price": "0.25",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "0.02",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": "Stock"
                },
                "line_total": "0.27",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "1",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.015",
                "status": "Ready For Customer ",
                "staging_location": [
                    "RCST, Aisle 4, Bay 3"
                ],
                "fulfillment_location_item_details": "2750,  \n",
                "fulfillment_date_line_item": "12/29/2025 08:00 am - 08:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "2121 CHARLOTTE HWY",
                    "address_line_2": null,
                    "city": "MOORESVILLE",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": null,
                    "longitude": null,
                    "country": "US",
                    "address_key": "fa75038f-3997-4bd6-bdfb-6d8eceac5206",
                    "is_address_verified": "N",
                    "is_commercial_address": "N",
                    "first_name": "Mark",
                    "last_name": "Holt"
                },
                "deliver_addressLines": "2121 CHARLOTTE HWY, \nMOORESVILLE, NC 28117",
                "item_type": "RGL",
                "min_line_status": "3350.015",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251215193113558466766193",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "864928",
                    "omni_item_id": "1003094846",
                    "is_type2": false,
                    "full_item_id": "864928_14250",
                    "item_desc": "Carpenter pencil Blue Pencil",
                    "model_no": "14250",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "0.25",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251215193113558466766194",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 864928,
                "line_unit_price": 0.25,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "2750",
                "fulfillment_date": "Appt 12025-12-29T08:00-05:00 - 2025-12-29T20:00-05:00",
                "refactoredFulDate": "Appt 1\n12/29/2025\n08:00 am - 08:00 pm",
                "entryType": "POS",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready For Customer",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": null,
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": null,
                            "node_type": null,
                            "node_id": "2750",
                            "description": null
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025121519311358862087628",
                        "timezone": "EST5EDT",
                        "delivery_instruction": "deliver range from order # 202750338251590834 staged in receiving aisle 4 bay 1 \n\ncall ahead ",
                        "quantity": "1",
                        "appt_status": "OPEN",
                        "description": "Ready For Customer",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018523839",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025121519311358451422198",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "2",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1039657208"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "43096",
                "model_no": "14250",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Mod not allowed for Sourcing Override"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Mod not allowed for Sourcing Override",
                            "Blocking CFO as no eligible lines present"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "1",
                        "item_id": "864928",
                        "requested_qty": "1",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-15T00:00-05:00"
            },
            {
                "categories": [],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "PRO",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Platinum Pro"
                },
                "international_sale": null,
                "item_behaviors": [],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025121519311358862087628"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": null,
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "Y",
                "line_subtotal": "79.00",
                "unlocked_unit_price": "0.01",
                "unit_price": "79.00",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "0.01",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [
                    {
                        "discount_per_unit": "78.99",
                        "total_discount": "78.99",
                        "category": "MANUAL_DEL_DISCOUNT",
                        "name": "Discount Delivery Fee",
                        "price_unlock": "Y",
                        "description": "Price Unlock"
                    }
                ],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "",
                "item_group_code": "DS",
                "jobDetails": null,
                "prime_line_no": "2",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [],
                "line_type": "-",
                "line_status": "1100",
                "status": "Created ",
                "staging_location": [],
                "fulfillment_location_item_details": "2750,  \n",
                "fulfillment_date_line_item": " 12/29/2025",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "2121 CHARLOTTE HWY",
                    "address_line_2": null,
                    "city": "MOORESVILLE",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": null,
                    "longitude": null,
                    "country": "US",
                    "address_key": "fa75038f-3997-4bd6-bdfb-6d8eceac5206",
                    "is_address_verified": "N",
                    "is_commercial_address": "N",
                    "first_name": "Mark",
                    "last_name": "Holt"
                },
                "deliver_addressLines": "2121 CHARLOTTE HWY, \nMOORESVILLE, NC 28117",
                "item_type": "DS",
                "min_line_status": "1100",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251215193113558466766194",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "2",
                    "omni_item_id": "-",
                    "is_type2": false,
                    "full_item_id": "2_14250",
                    "item_desc": "Delivery Service",
                    "model_no": "",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "DS",
                    "line_unit_price": "79.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 2,
                "line_unit_price": 79,
                "type": "Service/Fee",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "-",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "refactoredFulDate": "-",
                "entryType": "POS",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Created",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": null,
                "store_phone_no": null,
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": null,
                            "node_type": null,
                            "node_id": "2750",
                            "description": null
                        }
                    ]
                },
                "appointments": [],
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251215193113558466766193",
                        "parent_prime_line_no": null
                    }
                ],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": null,
                "model_no": "14250",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Blocking CFO as no eligible lines present",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-15T00:00-05:00"
            }
        ],
        "raw_order_lines": [
            {
                "allow_change_fulfillment_pick_to_gig": null,
                "item_behaviors": [
                    "Regular"
                ],
                "categories": [
                    "WRITING_UTENSILS"
                ],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "231760060",
                "expected_availability_days": "1",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "2750",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "1",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": "1003094846",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "1",
                        "item_id": "864928",
                        "requested_qty": "1",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": "Stock"
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "0.27",
                "taxes": [
                    {
                        "total_amount": "0.02",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "N",
                "line_subtotal": "0.25",
                "unlocked_unit_price": "0.25",
                "is_item_non_discountable": null,
                "discounts": [],
                "allow_change_fulfillment_option": "N",
                "delivery_method": "DEL",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "2750",
                "staging_location": [
                    "RCST, Aisle 4, Bay 3"
                ],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "0.00",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": "LOWES_DELIVERY",
                "invoice_nos": null,
                "item_desc": "Carpenter pencil Blue Pencil",
                "item_id": "864928",
                "full_item_id": "864928_14250",
                "item_type": "RGL",
                "unit_price": "0.25",
                "model_no": "14250",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "20251215193113558466766193",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": "0.5",
                "unit_height": "0.25",
                "prime_line_no": "1",
                "category_id": null,
                "product_ship_date": "2025-12-15T00:00-05:00",
                "unit_of_measure": null,
                "item_weight": "0.024",
                "min_line_status": "3350.015",
                "item_group_code": "PROD",
                "is_type2": false,
                "quote_type": "ESTIMATE",
                "job_details": null,
                "line_status": "3350.015",
                "shipment_status": null,
                "line_type": "STK",
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": "43096",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025121519311358862087628",
                        "timezone": "EST5EDT",
                        "delivery_instruction": "deliver range from order # 202750338251590834 staged in receiving aisle 4 bay 1 \n\ncall ahead ",
                        "quantity": "1",
                        "appt_status": "OPEN",
                        "description": "Ready For Customer",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018523839",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025121519311358451422198",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "2",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1039657208"
                    }
                ],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "2121 CHARLOTTE HWY",
                    "address_line_2": null,
                    "city": "MOORESVILLE",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": null,
                    "longitude": null,
                    "country": "US",
                    "address_key": "fa75038f-3997-4bd6-bdfb-6d8eceac5206",
                    "is_address_verified": "N",
                    "is_commercial_address": "N",
                    "first_name": "Mark",
                    "last_name": "Holt"
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251215193113558466766194",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "orderline_shipnode": {
                    "shipnode_person_info": null,
                    "node_type": null,
                    "node_id": "2750",
                    "description": null
                },
                "status": "Ready For Customer",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [],
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Mod not allowed for Sourcing Override"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Mod not allowed for Sourcing Override",
                            "Blocking CFO as no eligible lines present"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellation_allowed_only_with_parent": "N"
            },
            {
                "allow_change_fulfillment_pick_to_gig": null,
                "item_behaviors": [],
                "categories": [],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "expected_availability_days": "1",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "2750",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "1",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": null,
                "releases": [],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "0.01",
                "taxes": [],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "Y",
                "line_subtotal": "79.00",
                "unlocked_unit_price": "0.01",
                "is_item_non_discountable": null,
                "discounts": [
                    {
                        "discount_per_unit": "78.99",
                        "total_discount": "78.99",
                        "category": "MANUAL_DEL_DISCOUNT",
                        "name": "Discount Delivery Fee",
                        "price_unlock": "Y",
                        "description": "Price Unlock"
                    }
                ],
                "allow_change_fulfillment_option": "N",
                "delivery_method": "",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "2750",
                "staging_location": [],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "0.00",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": null,
                "invoice_nos": null,
                "item_desc": "Lowes Delivery Service Item",
                "item_id": "2",
                "full_item_id": "2_14250",
                "item_type": "DS",
                "unit_price": "79.00",
                "model_no": "14250",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "20251215193113558466766194",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": null,
                "unit_height": null,
                "prime_line_no": "2",
                "category_id": null,
                "product_ship_date": "2025-12-15T00:00-05:00",
                "unit_of_measure": null,
                "item_weight": null,
                "min_line_status": "1100",
                "item_group_code": "DS",
                "is_type2": false,
                "quote_type": "",
                "job_details": null,
                "line_status": "1100",
                "shipment_status": null,
                "line_type": null,
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": null,
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "2121 CHARLOTTE HWY",
                    "address_line_2": null,
                    "city": "MOORESVILLE",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": null,
                    "longitude": null,
                    "country": "US",
                    "address_key": "fa75038f-3997-4bd6-bdfb-6d8eceac5206",
                    "is_address_verified": "N",
                    "is_commercial_address": "N",
                    "first_name": "Mark",
                    "last_name": "Holt"
                },
                "child_relationships": [],
                "orderline_shipnode": {
                    "shipnode_person_info": null,
                    "node_type": null,
                    "node_id": "2750",
                    "description": null
                },
                "status": "Created",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251215193113558466766193",
                        "parent_prime_line_no": null
                    }
                ],
                "so_shipment_lines": null,
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Blocking CFO as no eligible lines present",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellation_allowed_only_with_parent": "N"
            }
        ],
        "alternatePickupPeople": {},
        "active_del_line_exists": "Y",
        "sortedAppointments": [
            "12/29/202508:002025121519311358862087628"
        ],
        "services": "$79.00 ",
        "sub_total": "$0.25 ",
        "tax": "$0.02 ",
        "text_opt_in": "(704) 902 - 1413",
        "tems_id": "-",
        "invoice_no": "73406",
        "transaction": "-",
        "notes": {
            "note": [
                {
                    "contact_time": "2025-12-16T06:09:36.454487827-05:00",
                    "contact_user": "Misty W",
                    "note_text": "Misty W has staged shipment 889622014 at staging location RCST, Aisle 4, Bay 3 on 2025-12-16T06:09:36.348538597",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "USER_ACTION",
                        "extn_store_no": "2750"
                    }
                },
                {
                    "contact_time": "2025-12-16T06:09:14.510045330-05:00",
                    "contact_user": "Misty W",
                    "note_text": "Misty W has completed the picking process on shipment 889622014 on 2025-12-16T11:09:14.498652858Z",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "USER_ACTION",
                        "extn_store_no": "2750"
                    }
                },
                {
                    "contact_time": "2025-12-15T17:38:10.494474848-05:00",
                    "contact_user": "Tracey Garner",
                    "note_text": "Delivery Instructions have been updated",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "USER_ACTION",
                        "extn_store_no": "2750"
                    }
                },
                {
                    "contact_time": "2025-12-15T17:37:48.272812643-05:00",
                    "contact_user": "Tracey Garner",
                    "note_text": "Delivery Instructions have been updated",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "USER_ACTION",
                        "extn_store_no": "2750"
                    }
                },
                {
                    "contact_time": "2025-12-15T14:31:13.736276119-05:00",
                    "contact_user": "",
                    "note_text": "Order Placement Confirmation email has been sent to customer at email address, \"holtj1033@gmail.com\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-12-15T14:31:13.716183075-05:00",
                    "contact_user": "",
                    "note_text": "Order Placement Confirmation text message has been sent to customer at phone number, \"7049021413\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-12-15T14:31:13.629989671-05:00",
                    "contact_user": "2575815",
                    "note_text": "null requested to create an order",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "USER_ACTION",
                        "extn_store_no": ""
                    }
                }
            ]
        },
        "events": {
            "event": [],
            "number_of_events": 0
        },
        "deliveryAppointments": [
            {
                "apptString": "Appt 1",
                "appointmentDate": "12/29/2025",
                "startTime": "08:00 AM",
                "endTime": "08:00 PM",
                "index": 0,
                "apptData": {
                    "appt_start_date": "2025-12-29T08:00-05:00",
                    "appt_end_date": "2025-12-29T20:00-05:00",
                    "appt_key": "2025121519311358862087628",
                    "timezone": "EST5EDT",
                    "delivery_instruction": "deliver range from order # 202750338251590834 staged in receiving aisle 4 bay 1 \n\ncall ahead ",
                    "quantity": "1",
                    "appt_status": "OPEN",
                    "description": "Ready For Customer",
                    "installer_name": null,
                    "installer_phone_no": null,
                    "installer_pmoc": null,
                    "installer_email": null,
                    "installer_fax": null,
                    "work_order_no": "1018523839",
                    "appt_seq_no": "1",
                    "delivery_status": "Scheduled",
                    "delivery_sub_status": "NO_DATA",
                    "lws_truck_type": "Box Truck",
                    "work_order_status": "1100.6000",
                    "work_order_key": "2025121519311358451422198",
                    "is_appointment_eligible": "Y",
                    "is_post_invoice_scenario": null,
                    "work_order_modified": null,
                    "hard_reservation_done": "Y",
                    "ds_prime_line_no": "2",
                    "appointment_type": "Default",
                    "max_appt_seq_no": "1",
                    "delivery_id": "1039657208"
                }
            }
        ],
        "order_header_key": "20251215193113554198250218",
        "is_military": "N",
        "pro_indicator": "Yes",
        "is_employee": "N",
        "entry_type": "POS",
        "document_type": "0001",
        "omnia_mod_hold_applied": "Y",
        "full_cancellation_allowed": "Y",
        "allow_schedule_appointment_later": "N",
        "display_lock_icon": "N",
        "has_pending_changes": "N",
        "loyalty_reward": {
            "membership_status": "ACTIVE",
            "membership_type": "PRO",
            "shipping_discount_under_loyalty": "N",
            "tier_metadata_name": "Platinum Pro"
        },
        "international_sale": null,
        "partial_payment_details": [],
        "extn_order_type": "STANDARD",
        "only_full_cancellation_allowed": "N",
        "allow_change_del_instr": "Y",
        "allow_change_del_address": "Y",
        "multiple_del_instr": "N",
        "allow_change_del_appt": "Y",
        "multiple_del_address": "N",
        "shipping_address1": "2121 CHARLOTTE HWY, ",
        "shipping_address2": "MOORESVILLE, NC 28117",
        "shipAddress_firstName": "Mark",
        "shipAddress_lastName": "Holt",
        "full_delivery_address": {
            "address_line_1": "2121 CHARLOTTE HWY",
            "address_line_2": null,
            "city": "MOORESVILLE",
            "state": "NC",
            "zipcode": "28117",
            "latitude": null,
            "longitude": null,
            "country": "US",
            "address_key": "fa75038f-3997-4bd6-bdfb-6d8eceac5206",
            "is_address_verified": "N",
            "is_commercial_address": "N",
            "first_name": "Mark",
            "last_name": "Holt",
            "city_state_zip": "MOORESVILLE, NC 28117"
        },
        "delivery_instruction": "deliver range from order # 202750338251590834 staged in receiving aisle 4 bay 1 \n\ncall ahead ",
        "editDeliveryInstruction": "deliver range from order # 202750338251590834 staged in receiving aisle 4 bay 1 \n\ncall ahead ",
        "isOrderHasLD": true,
        "isOrderHasDD": false,
        "isOrderHasPD": true,
        "appointments": [
            {
                "appointment_id": "78b40596-3134-42eb-8635-611883bd5770",
                "appt_start_date": "2025-12-29T08:00-05:00",
                "appt_end_date": "2025-12-29T20:00-05:00",
                "appt_status": "OPEN",
                "appt_key": "2025121519311358862087628",
                "work_order_key": "2025121519311358451422198",
                "lws_truck_type": "Box Truck",
                "work_order_status": "1100.6000",
                "work_order_no": "1018523839",
                "is_appointment_eligible": "Y",
                "order_lines": [
                    {
                        "order_line_key": "20251215193113558466766193",
                        "item_id": "864928",
                        "item_desc": "Carpenter pencil Blue Pencil",
                        "quantity": "1",
                        "model_no": "14250",
                        "shipment_key": null,
                        "shipment_line_key": null,
                        "status_desc": "Ready For Customer",
                        "delivery_method": "DEL",
                        "fulfillment_location": "2750",
                        "prime_line_no": "1",
                        "line_status": "3350.015",
                        "min_line_status": "3350.015",
                        "is_PCR_item": false,
                        "ship_together_no": null
                    }
                ],
                "mod_eligibility": {
                    "schedule_redelivery": {
                        "allow": "N",
                        "disable_reason": [
                            "Not allowed due to order status"
                        ]
                    },
                    "load_to_truck": {
                        "allow": "N",
                        "disable_reason": [
                            "Available on day of delivery."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Appointment is not eligible for Service Grouping."
                        ]
                    },
                    "post_load_to_truck_correction": {
                        "allow": "N",
                        "disable_reason": [
                            "Post Load To Truck is not possible because of the status of the order"
                        ]
                    },
                    "partial_post_load_to_truck_correction": {
                        "allow": "N",
                        "disable_reason": [
                            "Post load to truck correction is not allowed or Partial post load to truck correction already done.",
                            "Post Load To Truck is not possible because of the status of the order"
                        ]
                    }
                }
            }
        ],
        "isAppointmentModEligible": true,
        "allow_change_fulfillment_option": "N",
        "isOrderHasPS": false,
        "isOrderHasSOSManual": false,
        "isOrderHasOthers": true,
        "isOrderHasServiceLines": true,
        "price_unlock_allowed": "Y",
        "applicable_price_unlock_subtotal": "$0.25 ",
        "unlocked_subtotal": "$0.25 ",
        "isUserInfoAvailable": false,
        "add_line_allowed": "Y",
        "allow_customer_pickup": "Y",
        "allow_change_complete_address": "Y",
        "max_customer_pickup_date": "Unscheduled",
        "all_eligible_pickup_items_available": "Y",
        "has_appeasement_invoice": "N",
        "pickup_availability_date": "",
        "allow_puis_expected_date_change": "N",
        "allow_preferred_method_of_contact_change": "Y",
        "disable_pmoc_change_reason": null,
        "allow_staging_location_change": "Y",
        "disable_staging_location_change_reason": null,
        "associate_thresholds": [],
        "order_hold_types": {
            "order_hold_type": [
                {
                    "hold_type": "MODIFICATION_HOLD",
                    "status": "1100",
                    "extn": {
                        "extn_token": "OmniaStore_80100109_2750"
                    },
                    "reason_text": "ADD_REMOVE_LINES",
                    "last_hold_type_date": "2025-12-26T12:04:02Z",
                    "resolver_user_id": null,
                    "transaction_id": "5a3ecb7d-9292-4798-94b5-b0aad58e0458"
                }
            ]
        },
        "isOrderHasReturnLines": false,
        "max_prime_line_no": "2",
        "maxPrimeLineNo": "2",
        "is_delayed_settlement": "N",
        "order_date": "2025-12-15T14:31:13.502-05:00",
        "taxExemptionStepId": "",
        "taxExemptioValidFlag": "N",
        "order_capture_location": "2750",
        "original_master_invoice_no": "270406522",
        "return_orders": null,
        "original_business_date": "2025-12-15T00:00:00Z",
        "original_sales_date": "2025-12-15T19:31:12.626Z",
        "sales_order": null,
        "order_with_lws_fraud_reject_hold": "N",
        "merchant_id": null,
        "xTraceId": "0f89c5ba-76a2-499b-9c3b-9c15c03c4590",
        "allow_change_payment": "N",
        "pending_auth_amount": "0.00",
        "allow_synchrony_change_payment": "Y",
        "amount_collected": "0.28",
        "allow_pickup_contact_change": "N",
        "disable_pickup_contact_change_reason": "Not allowed due to order status.",
        "pickup_contacts": null,
        "mod_block_reasons": {
            "CANCEL_ORDER": null,
            "CHANGE_DEL_ADDRESS": null,
            "CHANGE_DEL_INSTRUCTION": null,
            "CHANGE_DEL_APPT": null,
            "CHANGE_FULFILLMENT_OPTION": null,
            "PRICE_UNLOCK": null,
            "ADD_ITEM": null,
            "SCH_DEL_APPT": null,
            "MODIFY_PUIS_DATE": null,
            "MODIFY_CUST_PMOC": null,
            "MODIFY_PICKUP_CONTACT": null,
            "CHANGE_PAYMENT": null
        },
        "mod_eligibility": {
            "full_cancellation_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_del_address": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_delivery_address": {
                "allow": "N",
                "disable_reason": [
                    "Adding delivery address is not allowed for non refund fulfilment orders"
                ]
            },
            "allow_change_del_instr": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_del_appt": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_complete_address": {
                "allow": "Y"
            },
            "allow_schedule_appointment_later": {
                "allow": "N",
                "disable_reason": null
            },
            "allow_change_fulfillment_option": {
                "allow": "N",
                "disable_reason": [
                    "Blocking CFO as no eligible lines present"
                ]
            },
            "add_line_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "price_unlock_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_coupon_promotion": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_staging_location_change": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_pickup_contact_change": {
                "allow": "N",
                "disable_reason": [
                    "No eligible Pick Up Line"
                ]
            },
            "allow_puis_expected_date_change": {
                "allow": "N",
                "disable_reason": [
                    "OrderLine status is Ready for Customer"
                ]
            },
            "allow_customer_pickup": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_preferred_method_of_contact_change": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_payment": {
                "allow": "N",
                "disable_reason": [
                    "Payment modification not allowed."
                ]
            },
            "allow_tax_exemption_modification": null,
            "tax_exemption": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_free_shipping": {
                "allow": "N",
                "disable_reason": [
                    "No active parcel lines on this order"
                ]
            },
            "add_military_discount": {
                "allow": "N",
                "disable_reason": [
                    "Not allowed on Pro Orders"
                ]
            },
            "schedule_redelivery": {
                "allow": "N",
                "disable_reason": null
            },
            "load_to_truck": {
                "allow": "N",
                "disable_reason": null
            },
            "customer_appeasement": {
                "allow": "N",
                "disable_reason": [
                    "Not allowed based on payment type (Non Dsm)"
                ]
            },
            "all_modification": {
                "allow": "Y",
                "disable_reason": null
            },
            "only_full_cancellation_allowed": {
                "allow": "N",
                "disable_reason": null
            },
            "allow_external_pickup": {
                "allow": "N",
                "disable_reason": [
                    "Order Line is not in valid status"
                ]
            },
            "allow_change_fulfillment_pick_to_gig": null
        },
        "organization_code": null,
        "enterprise_code": "LOWES",
        "orderDetailLastUpdatedTime": "12/26/2025 05:34 PM",
        "vsp_indicator": "N",
        "fraud_status": "ACCEPT",
        "cart_type": "QUOTE",
        "quote_type": "ESTIMATE",
        "quote_id": "231760060",
        "outlet_store": "N",
        "identity_id": "e6f20696-f487-4a4c-bcf2-a7f284758d73",
        "is_registered_customer": "Y",
        "spanId": "4e644418-5a96-4699-b067-baeba446bfac"
    },
    "groupByProjects": true,
    "hideSelectAllCheckbox": true
};


/**
 * OrderDetailsTableHeader
 * ProductDetails is a component which maps Product details in a specific manner.
 */
/* const orderDetailsTableHeaderData = [
  {
    key: orderDetailsTableHeaderConstants.item_id,
    name: 'Product Details',
    output(value, row) {
      // check if price is unlocked and display the open lock icon
      const isPriceUnlocked =
        enablePriceUnlock && isApplicable(row.is_price_unlocked);
      const { productDetails, line_behaviors } = row;
      let className = 'order-detail-productInfo';
      if (checkLaborItemCategory(productDetails) && enableInstallModsNewUx()) {
        className = `${className} align-labor-line`;
      }
      return (
        <ProductDetails
          productDetails={productDetails}
          line_behaviors={line_behaviors}
          size="small"
          textLimit={23}
          modelTextLimit={7}
          className={className}
          isCratingLine={isCrateLine(row)}
          calledFrom="order-details-productInfo-one"
        >
          <span
            data-qtag-item-qty={productDetails.quantity}
          >{`Qty: ${productDetails.quantity}`}</span>
          {enableSchedulePickup && <ReturnPickuporderList row={row} />}
          {isApplicable(row.is_reshipped_line) &&
            <div className="redelivery-indicator">
              <Icons type="reDeliveryTruck" color="rgb(0, 54, 178)" />
              <div style={{ width: '111px' }}
                className="redelivery-indicator-text"
                data-testid="reshipped-line-indicator"
              >
                Reshipped Item
              </div>
            </div>
          }
          {isApplicable(row.is_original_line) &&
            <div className="redelivery-indicator"
              style={{
                background: 'rgb(253, 240, 211)',
                width: '103px'
              }}>
              <div className="redelivery-indicator-text"
                style={{
                  marginLeft: '0px',
                  width: '91px'
                }}
                data-testid="reshipped-original-line-indicator"
              >
                Original Item
              </div>
            </div>
          }
          {isPriceUnlocked ? (
            <Icons
              type="lockOpen"
              style={{
                color: '#338700',
                marginLeft: '6px',
                height: '21px',
                width: '21px',
                verticalAlign: 'middle'
              }}
              data-testid="lock-open-icon"
              data-qtag-table-unlock-icon={`item-id-${productDetails.item_id}`}
            />
          ) : null}
          <ProductDetailsServices
            productDetails={productDetails}
            showQuantity
          />
        </ProductDetails>
      );
    }
  },
  {
    key: orderDetailsTableHeaderConstants.type,
    name: 'Fulfillment Type',
    output(value, row) {
      if (isDepositLine(row)) {
        return DataNotAvailable;
      }
      if (enableVendorDeliveryFullfilmentType) {
        const levelOfService = row?.levelOfServiceConfig;

        if (levelOfService?.toUpperCase() === vendorTruckDelivery) {
          return (
            <div className="image_container">
              <Icons
                style={{
                  transform: 'rotateY(180deg)'
                }}
                type="deliveryQueueTruck"
              />
              <div
                data-testid="fullfilment-type-cell"
                style={{
                  display: 'inline',
                  position: 'relative',
                  bottom: '0.35rem',
                  left: '0.15rem'
                }}
              >
                {vendorFulfillmentDisplayName}
              </div>
            </div>
          );
        }
      }
      if (isGIGLine(value, row.carrier_service_code)) {
        return (
          <div className="image_container">
            {row.type === 'Pickup Later (PL)' && <Icons type="Gig" color="rgb(0,0,0)" />}
            <div
              style={{
                display: 'inline',
                position: 'relative',
                bottom: '0.35rem',
                left: '0.15rem'
              }}
            >
              Same-Day Driver Pickup
            </div>
          </div>
        );
      }
      if (isInstaCartLine(value, row.carrier_service_code)) {
        return (
          <div className="image_container">
            <div>
              Instacart
            </div>
          </div>
        );
      }
      if (value === 'Pickup Later (PL)') {
        return (
          <>
            <div className="image_container">
              {row.type === 'Pickup Later (PL)' && <Icons type="pickUp" color="rgb(0,0,0)" />}
              <div
                style={{
                  display: 'inline',
                  position: 'relative',
                  bottom: '0.35rem',
                  left: '0.15rem'
                }}
              >
                {modifyFulfillmentTypeValue(value)}
              </div>
            </div>

            <div style={{ color: 'grey', 'padding-left': '4px' }}>
              {row.pickup_type || 'In Store'}
            </div>
          </>
        );
      }
      if (value === 'Parcel Delivery (PD)') {
        ; return (
          <div className="image_container">
            <Icons
              style={{
                transform: 'rotateY(180deg)'
              }}
              type="shipping"
            />
            <div className='fulfillment-type-text'>
              {modifyFulfillmentTypeValue(value)}
            </div>
          </div>
        );
      }
      if (
        value === `Lowe's Delivery (LD)` ||
        value === 'Direct Delivery (DD)'
      ) {
        return (
          <div className="image_container">
            <Icons
              style={{
                transform: 'rotateY(180deg)'
              }}
              type="shipping"
            />
            <div
              style={{
                display: 'inline',
                position: 'relative',
                bottom: '0.35rem',
                left: '0.15rem'
              }}
            >
              {modifyFulfillmentTypeValue(value)}
            </div>
          </div>
        );
      }
      return fulfillmentType[value];
    }
  },
  {
    key: orderDetailsTableHeaderConstants.fulfillment_date,
    name: 'Fulfillment Date',
    output: fulfillmentDateOutput
  },
  {
    key: orderDetailsTableHeaderConstants.fulfillment_location,
    name: 'Fulfillment Location',
    // function to show tooltip
    tooltip(value, row) {
      const rowData = { ...row };
      return value !== DataNotAvailable && !isDepositLine(row) &&
        (rowData.store_name || rowData.store_phone_no) ? (
          <div style={{ width: '150px' }}>{`${rowData.store_name ||
          ''}\n${rowData.store_phone_no || ''}`}</div>
        ) : (
          ''
        );
    },
    output(value, row) {
      if (isDepositLine(row)) {
        return DataNotAvailable;
      }
      if (enableVendorDeliveryFullfilmentType) {
        const levelOfService = row?.levelOfServiceConfig;
        if (levelOfService?.toUpperCase() === vendorTruckDelivery) {
          return <span data-testid='fullfilment-location-cell-value'>{vendorLocationDisplayName}</span>;
        }
      }
      return value;
    }
  },
  {
    key: orderDetailsTableHeaderConstants.po_to_vendor,
    name: 'PO #',
    output(value, row) {
      if (isDepositLine(row)) {
        return DataNotAvailable;
      }
      return renderPONumberColumn(row);
    }
  },
  {
    key: orderDetailsTableHeaderConstants.invoice_no,
    name: 'Invoice #',
    // function to show tooltip
    tooltip(value) {
      const formattedValue = [...value];
      let formattedText = '';
      if (formattedValue.length > 1) {
        formattedValue.shift();
        formattedValue.forEach(val => {
          formattedText += `${val} \n`;
        });
      }
      return formattedText;
    },
    output(value, row) {
      if (isDepositLine(row)) {
        return DataNotAvailable;
      }
      return value.length > 1 ? `${value[0]}...` : value[0];
    }
  },
  {
    key: orderDetailsTableHeaderConstants.status,
    name: 'Status',
    output(value, row) {
      // isitemLoaded flag decides whether to show "Item Loaded"
      // tag on the order details screen or not
      const isItemLoaded = row.line_status === orderLineStatusCodes.shipped &&
        !!Number(row.productDetails.invoicedQuantity);

      const isGigPizzaDeliveryTracker =
        isApplicable(row?.carrier_service_code === gigDelivery);

      const isInstacartTracker = isApplicable(row?.carrier_service_code === instaDelivery);
      const isLDOrder = row?.delivery_method == loadTypeMapper.LD;

      // Included Inline Styling
      // REASON: To have the style in a stylesheet we need to import CSS file which can be a overhead for a CSS file.
      return <>
        <div>{value}</div>
        {
          isItemLoaded &&
          <div className="redelivery-indicator"
            style={{
              width: '130px',
              marginLeft: '0px',
              marginTop: '4px'
            }}
          >
            <div style={{ height: '24px', paddingTop: '6px' }}>
              <Icons type="loadToTruck" color="rgb(0, 54, 178)"
              />
            </div>
            <div
              className="redelivery-indicator-text"
              data-testid="loadToTruck-indicator"
            >
              Item loaded
            </div>
          </div>
        }{isApplicable(row.has_redelivery_qty) &&
          <div className="redelivery-indicator"
            style={{
              width: '130px',
              marginLeft: '0px',
              marginTop: '4px'
            }}
          >
            <div style={{ height: '24px' }}>
              <Icons type="reDeliveryTruck" />
            </div>
            <div
              className="redelivery-indicator-text"
              data-testid="redelivery-indicator"
            >
              Redelivery
            </div>
          </div>
        }
        {isDelTypeEligible(row.carrier_service_code) && row.refactoredFulDate !== UnscheduledAppointment &&
          // We are not showing Pizza Tracker for unscheduled lines
          <PizzaTracker
            row={row}
            isGigPizzaDeliveryTracker={isGigPizzaDeliveryTracker}
            isInstacartTracker={isInstacartTracker}
            isLDOrder={isLDOrder}
          />
        }
      </>;
    }
  }
]; */


export const splitDelItemSelectionGroupedByAppts_OneRowSelected = {
    "order": "asc",
    "rowKey": "order_line_key",
    "selectedRowKey": null,
    "rowsPerPage": 9007199254740991,
    "orderBy": "type",
    "tableData": {
        "header": [
            {
                "key": "item_id",
                "name": "Product Details"
            },
            {
                "key": "type",
                "name": "Fulfillment Type"
            },
            {
                "key": "fulfillment_date",
                "name": "Fulfillment Date"
            },
            {
                "key": "fulfillment_location",
                "name": "Fulfillment Location"
            },
            {
                "key": "poToVendor",
                "name": "PO #"
            },
            {
                "key": "invoice_no",
                "name": "Invoice #"
            },
            {
                "key": "status",
                "name": "Status"
            }
        ],
        "body": [
            {
                "categories": [
                    "PRE_HUNG_DOORS"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "DIY",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Gold Key"
                },
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025122216441207962644213"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": "5014714687",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "474.00",
                "unlocked_unit_price": "237.00",
                "unit_price": "237.00",
                "unit_cost": "161.46",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "32.00",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "506.00",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "1",
                "ordered_quantity": "2",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.0020",
                "status": "Ready for Pick ",
                "staging_location": [
                    ""
                ],
                "fulfillment_location_item_details": "2750,  Troutman Lowe's,\n1041 Charlotte Highway, \nTroutman, NC 28166",
                "fulfillment_date_line_item": "12/29/2025 08:00 am - 08:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "deliver_addressLines": "236 Transco Rd, \nmooresville, NC 28117",
                "item_type": "RGL",
                "min_line_status": "3350.0020",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251222164412050469968949",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "5509456",
                    "omni_item_id": "5014714687",
                    "is_type2": false,
                    "full_item_id": "5509456_10125208",
                    "item_desc": "36-in x 80-in Primed Solid core 1-panel Left hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                    "model_no": "10125208",
                    "quantity": "2",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "237.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251222164412050469968948",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 2,
                "allow_change_fulfillment_option": "Y",
                "item_id": 5509456,
                "line_unit_price": 237,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "2750",
                "fulfillment_date": "Appt 12025-12-29T08:00-05:00 - 2025-12-29T20:00-05:00",
                "refactoredFulDate": "Appt 1\n12/29/2025\n08:00 am - 08:00 pm",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready for Pick",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": "Troutman Lowe's",
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "1041 Charlotte Highway",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Troutman",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28166"
                            },
                            "node_type": null,
                            "node_id": "2750",
                            "description": "Troutman Lowe's"
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025122216441207962644213",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "2",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018839924",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025122216441207651795970",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "3",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1040187872"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "109262",
                "model_no": "10125208",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "2",
                        "item_id": "5509456",
                        "requested_qty": "2",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-22T00:00-05:00"
            },
            {
                "categories": [
                    "PRE_HUNG_DOORS"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "DIY",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Gold Key"
                },
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025122216441207962644213"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": "5014714721",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "237.00",
                "unlocked_unit_price": "237.00",
                "unit_price": "237.00",
                "unit_cost": "170.68",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "16.00",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "253.00",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "2",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.0020",
                "status": "Ready for Pick ",
                "staging_location": [
                    ""
                ],
                "fulfillment_location_item_details": "2750,  Troutman Lowe's,\n1041 Charlotte Highway, \nTroutman, NC 28166",
                "fulfillment_date_line_item": "12/29/2025 08:00 am - 08:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "deliver_addressLines": "236 Transco Rd, \nmooresville, NC 28117",
                "item_type": "RGL",
                "min_line_status": "3350.0020",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251222164412050469968947",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "5509449",
                    "omni_item_id": "5014714721",
                    "is_type2": false,
                    "full_item_id": "5509449_10125207",
                    "item_desc": "36-in x 80-in Primed Solid core 1-panel Right hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                    "model_no": "10125207",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "237.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251222164412050469968948",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "Y",
                "item_id": 5509449,
                "line_unit_price": 237,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "2750",
                "fulfillment_date": "Appt 12025-12-29T08:00-05:00 - 2025-12-29T20:00-05:00",
                "refactoredFulDate": "Appt 1\n12/29/2025\n08:00 am - 08:00 pm",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready for Pick",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": "Troutman Lowe's",
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "1041 Charlotte Highway",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Troutman",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28166"
                            },
                            "node_type": null,
                            "node_id": "2750",
                            "description": "Troutman Lowe's"
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025122216441207962644213",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "1",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018839924",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025122216441207651795970",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "3",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1040187872"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "109262",
                "model_no": "10125207",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "1",
                        "item_id": "5509449",
                        "requested_qty": "1",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-22T00:00-05:00"
            },
            {
                "categories": [],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "DIY",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Gold Key"
                },
                "international_sale": null,
                "item_behaviors": [],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025122216441207962644213"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": null,
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "79.00",
                "unlocked_unit_price": "79.00",
                "unit_price": "79.00",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "5.33",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "84.33",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "",
                "item_group_code": "DS",
                "jobDetails": null,
                "prime_line_no": "3",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [],
                "line_type": "-",
                "line_status": "1100",
                "status": "Created ",
                "staging_location": [],
                "fulfillment_location_item_details": "2750,  Troutman Lowe's,\n1041 Charlotte Highway, \nTroutman, NC 28166",
                "fulfillment_date_line_item": " 12/29/2025",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "deliver_addressLines": "236 Transco Rd, \nmooresville, NC 28117",
                "item_type": "DS",
                "min_line_status": "1100",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251222164412050469968948",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "2",
                    "omni_item_id": "-",
                    "is_type2": false,
                    "full_item_id": "2_10125207",
                    "item_desc": "Delivery Service",
                    "model_no": "",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "DS",
                    "line_unit_price": "79.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 2,
                "line_unit_price": 79,
                "type": "Service/Fee",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "-",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "refactoredFulDate": "-",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Created",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": "Troutman Lowe's",
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "1041 Charlotte Highway",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Troutman",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28166"
                            },
                            "node_type": null,
                            "node_id": "2750",
                            "description": "Troutman Lowe's"
                        }
                    ]
                },
                "appointments": [],
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251222164412050469968947",
                        "parent_prime_line_no": null
                    },
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251222164412050469968949",
                        "parent_prime_line_no": null
                    }
                ],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": null,
                "model_no": "10125207",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-22T00:00-05:00"
            }
        ]
    },
    "pagination": false,
    "classes": "tableWrapper",
    "tableHeight": 580,
    "serviceHeaders": [
        {
            "key": "child_order_line_item_desc",
            "name": "Product Details"
        },
        {
            "key": "type",
            "name": "Fulfillment Type"
        },
        {
            "key": "fulfillment_date",
            "name": "Fulfillment Date"
        },
        {
            "key": "fulfillment_location",
            "name": "Fulfillment Location"
        },
        {
            "key": "vendor_po_no",
            "name": "PO #"
        },
        {
            "key": "invoice_no",
            "name": "Invoice #"
        },
        {
            "key": "status",
            "name": "Status"
        }
    ],
    "tabIndexValue": -1,
    "showLoader": false,
    "noOfRowsInLoader": 4,
    "orderData": {
        "omniItemIdMapper": {
            "2": null,
            "5509449": "5014714721",
            "5509456": "5014714687"
        },
        "disable_all_mods": "N",
        "is_history": null,
        "originalBillToAddress": {
            "address_line_1": "236 Transco Rd",
            "address_line_2": "",
            "city": "mooresville",
            "state": "NC",
            "zipcode": "28117",
            "country": "US"
        },
        "billing_address": "mooresville, NC 28117",
        "billing_street": "236 Transco Rd, ",
        "bush_pilot_sale": false,
        "quote_description": null,
        "project_description": null,
        "refund_order_no": null,
        "business": "-",
        "business_channel": "DIGITAL_LOWESDESKTOP",
        "customer_po": "-",
        "discount": "$0.00",
        "email": "chaddlugo@gmail.com",
        "fees": "$0.00",
        "delivery_fees": [
            "79.00"
        ],
        "shipping_fee": null,
        "logged_in_store": "2750",
        "first_name": "chad",
        "last_name": "dlugoszewski",
        "order_no": "300902356254480346",
        "display_order_no": "300902356254480346",
        "display_order_label": "Order# ",
        "logged_in_user_id": "80100109",
        "order_source": "Orbit Order",
        "order_status": "Ready for Pick",
        "payment_status": "AUTHORIZED",
        "payment_total": "$843.33",
        "payment_methods": {
            "payment_method": [
                {
                    "display_card_number": "9548",
                    "credit_card_type": null,
                    "max_charge_limit": "843.33",
                    "payment_type": "CREDIT_CARD_MTL",
                    "payment_reference_1": "HANDKEYED",
                    "credit_card_number": null,
                    "display_payment_identifier": "M/C",
                    "unlimited_charges": "Y",
                    "expiry": "0127",
                    "total_charged": "0.00",
                    "check_no": "",
                    "check_reference": "",
                    "payment_key": "20251222164412087187549661",
                    "card_holder_name": null,
                    "is_card_suspended": "false",
                    "total_authorized": "843.33",
                    "total_refund_amount": "0.00",
                    "card_type": "M/C",
                    "card_number": "556723EJOZRC9548",
                    "zipcode": null,
                    "has_payment_failure": "false",
                    "is_payment_method_removable": "false",
                    "recurring_reference": "",
                    "transaction_type": null,
                    "allow_retry_auth_failure": "N",
                    "open_authorizations": []
                }
            ]
        },
        "unformatted_phone": "7047375350",
        "phone": "(704) 737 - 5350",
        "order_purpose": "-",
        "preferred_contact": "",
        "pro_customer": "No",
        "sales_channel": "LOWES_COM",
        "eligible_project_ids": [],
        "allow_change_fulfillment_pick_to_gig": "-",
        "channel_id": "LOWES_COM",
        "terminal_number": "087",
        "sales_date": "12/22/2025, 11:44 AM EST",
        "selling_location": "-",
        "selling_location_addLine": "0907",
        "orderDetailsTableData": [
            {
                "categories": [
                    "PRE_HUNG_DOORS"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "DIY",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Gold Key"
                },
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025122216441207962644213"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": "5014714687",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "474.00",
                "unlocked_unit_price": "237.00",
                "unit_price": "237.00",
                "unit_cost": "161.46",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "32.00",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "506.00",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "1",
                "ordered_quantity": "2",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.0020",
                "status": "Ready for Pick ",
                "staging_location": [
                    ""
                ],
                "fulfillment_location_item_details": "2750,  Troutman Lowe's,\n1041 Charlotte Highway, \nTroutman, NC 28166",
                "fulfillment_date_line_item": "12/29/2025 08:00 am - 08:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "deliver_addressLines": "236 Transco Rd, \nmooresville, NC 28117",
                "item_type": "RGL",
                "min_line_status": "3350.0020",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251222164412050469968949",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "5509456",
                    "omni_item_id": "5014714687",
                    "is_type2": false,
                    "full_item_id": "5509456_10125208",
                    "item_desc": "36-in x 80-in Primed Solid core 1-panel Left hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                    "model_no": "10125208",
                    "quantity": "2",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "237.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251222164412050469968948",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 2,
                "allow_change_fulfillment_option": "Y",
                "item_id": 5509456,
                "line_unit_price": 237,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "2750",
                "fulfillment_date": "Appt 12025-12-29T08:00-05:00 - 2025-12-29T20:00-05:00",
                "refactoredFulDate": "Appt 1\n12/29/2025\n08:00 am - 08:00 pm",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready for Pick",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": "Troutman Lowe's",
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "1041 Charlotte Highway",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Troutman",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28166"
                            },
                            "node_type": null,
                            "node_id": "2750",
                            "description": "Troutman Lowe's"
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025122216441207962644213",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "2",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018839924",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025122216441207651795970",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "3",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1040187872"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "109262",
                "model_no": "10125208",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "2",
                        "item_id": "5509456",
                        "requested_qty": "2",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-22T00:00-05:00"
            },
            {
                "categories": [
                    "PRE_HUNG_DOORS"
                ],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "DIY",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Gold Key"
                },
                "international_sale": null,
                "item_behaviors": [
                    "Regular"
                ],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025122216441207962644213"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": "5014714721",
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "237.00",
                "unlocked_unit_price": "237.00",
                "unit_price": "237.00",
                "unit_cost": "170.68",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "16.00",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "253.00",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "DEL",
                "item_group_code": "PROD",
                "jobDetails": null,
                "prime_line_no": "2",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "line_type": "STK",
                "line_status": "3350.0020",
                "status": "Ready for Pick ",
                "staging_location": [
                    ""
                ],
                "fulfillment_location_item_details": "2750,  Troutman Lowe's,\n1041 Charlotte Highway, \nTroutman, NC 28166",
                "fulfillment_date_line_item": "12/29/2025 08:00 am - 08:00 pm",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "deliver_addressLines": "236 Transco Rd, \nmooresville, NC 28117",
                "item_type": "RGL",
                "min_line_status": "3350.0020",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251222164412050469968947",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "5509449",
                    "omni_item_id": "5014714721",
                    "is_type2": false,
                    "full_item_id": "5509449_10125207",
                    "item_desc": "36-in x 80-in Primed Solid core 1-panel Right hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                    "model_no": "10125207",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "RGL",
                    "line_unit_price": "237.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251222164412050469968948",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "Y",
                "item_id": 5509449,
                "line_unit_price": 237,
                "type": "Lowe's Delivery (LD)",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "2750",
                "fulfillment_date": "Appt 12025-12-29T08:00-05:00 - 2025-12-29T20:00-05:00",
                "refactoredFulDate": "Appt 1\n12/29/2025\n08:00 am - 08:00 pm",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Ready for Pick",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": "Troutman Lowe's",
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "1041 Charlotte Highway",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Troutman",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28166"
                            },
                            "node_type": null,
                            "node_id": "2750",
                            "description": "Troutman Lowe's"
                        }
                    ]
                },
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025122216441207962644213",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "1",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018839924",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025122216441207651795970",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "3",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1040187872"
                    }
                ],
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": "109262",
                "model_no": "10125207",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "1",
                        "item_id": "5509449",
                        "requested_qty": "1",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-22T00:00-05:00"
            },
            {
                "categories": [],
                "item_config_attr": [],
                "config_item_category": null,
                "loyalty_reward": {
                    "membership_status": "ACTIVE",
                    "membership_type": "DIY",
                    "shipping_discount_under_loyalty": "N",
                    "tier_metadata_name": "Gold Key"
                },
                "international_sale": null,
                "item_behaviors": [],
                "allow_change_fulfillment_pick_to_gig": null,
                "allApptsForOrder": [
                    "12/29/202508:002025122216441207962644213"
                ],
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "is_type2": false,
                "quote_type": "-",
                "omni_item_id": null,
                "is_dso_fully_cancelled": null,
                "is_price_unlocked": "N",
                "line_subtotal": "79.00",
                "unlocked_unit_price": "79.00",
                "unit_price": "79.00",
                "unit_cost": "0.00",
                "price_unlock_allowed": "Y",
                "is_item_non_discountable": null,
                "node_type": "Store",
                "exchange_orders": [],
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "taxes": [
                    {
                        "total_amount": "5.33",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "line_total": "84.33",
                "charges": [],
                "return_pickup_orders": [],
                "discounts": [],
                "pickup_person_name": null,
                "unit_of_measure": "-",
                "delivery_method": "",
                "item_group_code": "DS",
                "jobDetails": null,
                "prime_line_no": "3",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "is_manual_sos": false,
                "is_original_line": "N",
                "is_reshipped_line": "N",
                "so_shipment_lines": [],
                "line_type": "-",
                "line_status": "1100",
                "status": "Created ",
                "staging_location": [],
                "fulfillment_location_item_details": "2750,  Troutman Lowe's,\n1041 Charlotte Highway, \nTroutman, NC 28166",
                "fulfillment_date_line_item": " 12/29/2025",
                "expected_date": "-",
                "pickup_type": null,
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "deliver_addressLines": "236 Transco Rd, \nmooresville, NC 28117",
                "item_type": "DS",
                "min_line_status": "1100",
                "shipment_status": "-",
                "is_bundled_epp": "N",
                "negative_selling_indicator": "N",
                "earliest_schedule_date": "-",
                "shipnode": "2750",
                "order_line_key": "20251222164412050469968948",
                "line_behaviors": [],
                "productDetails": {
                    "img": "",
                    "item_id": "2",
                    "omni_item_id": "-",
                    "is_type2": false,
                    "full_item_id": "2_10125207",
                    "item_desc": "Delivery Service",
                    "model_no": "",
                    "quantity": "1",
                    "invoicedQuantity": "0",
                    "item_type": "DS",
                    "line_unit_price": "79.00",
                    "pcr_group_type": "NON_PCR_GROUP",
                    "ship_together_no": null,
                    "is_PCR_item": false,
                    "line_options": []
                },
                "child_relationships": [],
                "services": [],
                "hasMultiplePSLine": false,
                "cancelQuantity": 1,
                "allow_change_fulfillment_option": "N",
                "item_id": 2,
                "line_unit_price": 79,
                "type": "Service/Fee",
                "vendor_po_no": null,
                "po_to_vendor": "-",
                "gift_card_no": "-",
                "poToVendor": null,
                "hasPurchaseOrderLines": false,
                "purchase_order_lines": null,
                "estimated_delivery_date": "2025-12-29T08:00:00-05:00",
                "fulfillment_location": "-",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "refactoredFulDate": "-",
                "entryType": "LOWES_COM",
                "invoice_no": [
                    "-"
                ],
                "originalStatus": "Created",
                "cancelledDate": "-",
                "cancelled_parent_id": null,
                "store_name": "Troutman Lowe's",
                "store_phone_no": "(704) 980 - 5000",
                "store_state": "NC",
                "transfer_order_no": "-",
                "vendorDetails": {
                    "shipNodes": [
                        {
                            "shipnode_person_info": {
                                "address_line_1": "1041 Charlotte Highway",
                                "address_line_2": null,
                                "state": "NC",
                                "city": "Troutman",
                                "country": "US",
                                "day_phone": "7049805000",
                                "zipcode": "28166"
                            },
                            "node_type": null,
                            "node_id": "2750",
                            "description": "Troutman Lowe's"
                        }
                    ]
                },
                "appointments": [],
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellationAllowedOnlyWithParent": "N",
                "isRtiItem": "N",
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251222164412050469968947",
                        "parent_prime_line_no": null
                    },
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251222164412050469968949",
                        "parent_prime_line_no": null
                    }
                ],
                "parent_order_line_key": null,
                "parentDetails": null,
                "disable_all_mods": "N",
                "extn_order_type": "STANDARD",
                "order_source": "Orbit Order",
                "is_history": null,
                "isUserInfoAvailable": false,
                "associate_thresholds": [],
                "level_of_service_desc": "DELIVERY",
                "parcel_delivery": [],
                "vbu_number": null,
                "model_no": "10125207",
                "carrier_service_code": "LWS_DELIVERY",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_name_desc": null,
                "carrier_service_code_desc": null,
                "delivered_date": null,
                "allow_change_pickup_store": "N",
                "prev_fulfillment_location": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "extended_protection_plan_reference": "-",
                "releases": [],
                "has_redelivery_qty": "N",
                "product_ship_date": "2025-12-22T00:00-05:00"
            }
        ],
        "raw_order_lines": [
            {
                "allow_change_fulfillment_pick_to_gig": null,
                "item_behaviors": [
                    "Regular"
                ],
                "categories": [
                    "PRE_HUNG_DOORS"
                ],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "expected_availability_days": "1",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "2750",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "2",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": "5014714687",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "2",
                        "item_id": "5509456",
                        "requested_qty": "2",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "506.00",
                "taxes": [
                    {
                        "total_amount": "32.00",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "N",
                "line_subtotal": "474.00",
                "unlocked_unit_price": "237.00",
                "is_item_non_discountable": null,
                "discounts": [],
                "allow_change_fulfillment_option": "Y",
                "delivery_method": "DEL",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "2750",
                "staging_location": [
                    ""
                ],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "161.46",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": "LOWES_DELIVERY",
                "invoice_nos": null,
                "item_desc": "36-in x 80-in Primed Solid core 1-panel Left hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                "item_id": "5509456",
                "full_item_id": "5509456_10125208",
                "item_type": "RGL",
                "unit_price": "237.00",
                "model_no": "10125208",
                "ordered_quantity": "2",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "20251222164412050469968949",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": "40.5",
                "unit_height": "84",
                "prime_line_no": "1",
                "category_id": null,
                "product_ship_date": "2025-12-22T00:00-05:00",
                "unit_of_measure": null,
                "item_weight": "105.0",
                "min_line_status": "3350.0020",
                "item_group_code": "PROD",
                "is_type2": false,
                "quote_type": "",
                "job_details": null,
                "line_status": "3350.0020",
                "shipment_status": null,
                "line_type": "STK",
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": "109262",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025122216441207962644213",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "2",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018839924",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025122216441207651795970",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "3",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1040187872"
                    }
                ],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251222164412050469968948",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "orderline_shipnode": {
                    "shipnode_person_info": {
                        "address_line_1": "1041 Charlotte Highway",
                        "address_line_2": null,
                        "state": "NC",
                        "city": "Troutman",
                        "country": "US",
                        "day_phone": "7049805000",
                        "zipcode": "28166"
                    },
                    "node_type": null,
                    "node_id": "2750",
                    "description": "Troutman Lowe's"
                },
                "status": "Ready for Pick",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [],
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellation_allowed_only_with_parent": "N"
            },
            {
                "allow_change_fulfillment_pick_to_gig": null,
                "item_behaviors": [
                    "Regular"
                ],
                "categories": [
                    "PRE_HUNG_DOORS"
                ],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "expected_availability_days": "1",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "2750",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "1",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": "5014714721",
                "releases": [
                    {
                        "status": "SCHEDULED",
                        "scheduled_qty": "1",
                        "item_id": "5509449",
                        "requested_qty": "1",
                        "ftc_cancel_date": "2026-01-28T20:00-05:00",
                        "next_promise_date": "2025-12-29T20:00-05:00",
                        "promise_date": "2025-12-29T20:00-05:00",
                        "first_promise_date": "2025-12-29T20:00-05:00"
                    }
                ],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "253.00",
                "taxes": [
                    {
                        "total_amount": "16.00",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "N",
                "line_subtotal": "237.00",
                "unlocked_unit_price": "237.00",
                "is_item_non_discountable": null,
                "discounts": [],
                "allow_change_fulfillment_option": "Y",
                "delivery_method": "DEL",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "2750",
                "staging_location": [
                    ""
                ],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "170.68",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": "LOWES_DELIVERY",
                "invoice_nos": null,
                "item_desc": "36-in x 80-in Primed Solid core 1-panel Right hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                "item_id": "5509449",
                "full_item_id": "5509449_10125207",
                "item_type": "RGL",
                "unit_price": "237.00",
                "model_no": "10125207",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "20251222164412050469968947",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": "40.5",
                "unit_height": "84",
                "prime_line_no": "2",
                "category_id": null,
                "product_ship_date": "2025-12-22T00:00-05:00",
                "unit_of_measure": null,
                "item_weight": "105.0",
                "min_line_status": "3350.0020",
                "item_group_code": "PROD",
                "is_type2": false,
                "quote_type": "",
                "job_details": null,
                "line_status": "3350.0020",
                "shipment_status": null,
                "line_type": "STK",
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": "109262",
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [
                    {
                        "appt_start_date": "2025-12-29T08:00-05:00",
                        "appt_end_date": "2025-12-29T20:00-05:00",
                        "appt_key": "2025122216441207962644213",
                        "timezone": "EST5EDT",
                        "delivery_instruction": null,
                        "quantity": "1",
                        "appt_status": "OPEN",
                        "description": "Ready for Pick",
                        "installer_name": null,
                        "installer_phone_no": null,
                        "installer_pmoc": null,
                        "installer_email": null,
                        "installer_fax": null,
                        "work_order_no": "1018839924",
                        "appt_seq_no": "1",
                        "delivery_status": "Scheduled",
                        "delivery_sub_status": "NO_DATA",
                        "lws_truck_type": "Box Truck",
                        "work_order_status": "1100.6000",
                        "work_order_key": "2025122216441207651795970",
                        "is_appointment_eligible": "Y",
                        "is_post_invoice_scenario": null,
                        "work_order_modified": null,
                        "hard_reservation_done": "Y",
                        "ds_prime_line_no": "3",
                        "appointment_type": "Default",
                        "max_appt_seq_no": "1",
                        "delivery_id": "1040187872"
                    }
                ],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "child_relationships": [
                    {
                        "relationship_type": "ProductDeliveryService",
                        "child_order_line_key": "20251222164412050469968948",
                        "quantity": "1",
                        "epp_bundled_qty": null,
                        "child_order_line_item_id": null,
                        "child_order_line_item_desc": null,
                        "child_order_line_unit_price": null,
                        "is_bundled_epp": null,
                        "cancellation_allowed": null,
                        "partial_cancellation_allowed": null,
                        "is_dso_fully_cancelled": null
                    }
                ],
                "orderline_shipnode": {
                    "shipnode_person_info": {
                        "address_line_1": "1041 Charlotte Highway",
                        "address_line_2": null,
                        "state": "NC",
                        "city": "Troutman",
                        "country": "US",
                        "day_phone": "7049805000",
                        "zipcode": "28166"
                    },
                    "node_type": null,
                    "node_id": "2750",
                    "description": "Troutman Lowe's"
                },
                "status": "Ready for Pick",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [],
                "so_shipment_lines": [
                    {
                        "shipment_date": null
                    }
                ],
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "add_delivery_service_options": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "cancellation_allowed": "Y",
                "partial_cancellation_allowed": "Y",
                "cancellation_allowed_only_with_parent": "N"
            },
            {
                "allow_change_fulfillment_pick_to_gig": null,
                "item_behaviors": [],
                "categories": [],
                "line_behaviors": [],
                "config_item_category": null,
                "extn_project_id": null,
                "extn_project_type": null,
                "quote_id": "",
                "expected_availability_days": "1",
                "item_config_attr": [],
                "fulfillment_details": [
                    {
                        "node": {
                            "node_id": "2750",
                            "node_type": "Store"
                        },
                        "sequence_number": "1",
                        "quantity": "1",
                        "is_atp": false,
                        "atp_details": [],
                        "path_location_company": "lowes",
                        "timezone": "America/New_York",
                        "is_direct_lane": false
                    }
                ],
                "exchange_orders": [],
                "return_pickup_orders": [],
                "is_manual_sos": false,
                "omni_item_id": null,
                "releases": [],
                "negative_selling_indicator": "N",
                "order_line_references": {
                    "installation_quote_id": null,
                    "is_stand_alone_additional_service": false,
                    "item_program_type": null
                },
                "earliest_schedule_date": null,
                "prev_fulfillment_location": null,
                "is_ds_line_cancelled_on_cfo": null,
                "price_unlock_allowed": "Y",
                "line_total": "84.33",
                "taxes": [
                    {
                        "total_amount": "5.33",
                        "name": "LWS_SALES_TAX",
                        "charge_name": null,
                        "charge_category": null,
                        "invoiced_amount": "0.00"
                    }
                ],
                "fees": [],
                "charges": [],
                "pickup_type": null,
                "is_price_unlocked": "N",
                "line_subtotal": "79.00",
                "unlocked_unit_price": "79.00",
                "is_item_non_discountable": null,
                "discounts": [],
                "allow_change_fulfillment_option": "N",
                "delivery_method": "",
                "fulfillment_date": "2025-12-29T08:00:00-05:00",
                "customer_pickup_date": null,
                "fulfillment_location": "2750",
                "staging_location": [],
                "transfer_order_lines": null,
                "purchase_order_lines": null,
                "level_of_service": "LWS_DELIVERY",
                "level_of_service_desc": "DELIVERY",
                "gift_card_no": null,
                "extended_protection_plan_reference": null,
                "has_redelivery_qty": "N",
                "unit_cost": "0.00",
                "assembly_option": null,
                "assembly_charge": null,
                "assembly_charge_per_unit": null,
                "assembly_item_id": null,
                "delivered_date": null,
                "fulfillment_type": null,
                "invoice_nos": null,
                "item_desc": "Lowes Delivery Service Item",
                "item_id": "2",
                "full_item_id": "2_10125207",
                "item_type": "DS",
                "unit_price": "79.00",
                "model_no": "10125207",
                "ordered_quantity": "1",
                "reshipped_quantity": "0",
                "shipped_quantity": "0",
                "returned_quantity": "0",
                "reship_parent_line_key": null,
                "is_reshipped_line": "N",
                "order_line_key": "20251222164412050469968948",
                "cancelled_parent_id": null,
                "invoiced_quantity": "0",
                "unit_length": null,
                "unit_weight": null,
                "pickup_person_name": null,
                "unit_width": null,
                "unit_height": null,
                "prime_line_no": "3",
                "category_id": null,
                "product_ship_date": "2025-12-22T00:00-05:00",
                "unit_of_measure": null,
                "item_weight": null,
                "min_line_status": "1100",
                "item_group_code": "DS",
                "is_type2": false,
                "quote_type": "",
                "job_details": null,
                "line_status": "1100",
                "shipment_status": null,
                "line_type": null,
                "freight_terms": null,
                "is_bundled_epp": "N",
                "vbu_number": null,
                "item_weight_uom": null,
                "ltl_exu_idc": "N",
                "carrier_service_code": "LWS_DELIVERY",
                "node_type": "Store",
                "tax_exemption_valid_flag": null,
                "tax_exemption_step_id": null,
                "parcel_delivery": null,
                "appointments": [],
                "line_options": [],
                "fulfillment_address": {
                    "address_line_1": "236 Transco Rd",
                    "address_line_2": "",
                    "city": "mooresville",
                    "state": "NC",
                    "zipcode": "28117",
                    "latitude": "35.524002",
                    "longitude": "-80.860412",
                    "country": "US",
                    "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
                    "is_address_verified": "Y",
                    "is_commercial_address": "N",
                    "first_name": "chad",
                    "last_name": "dlugoszewski"
                },
                "child_relationships": [],
                "orderline_shipnode": {
                    "shipnode_person_info": {
                        "address_line_1": "1041 Charlotte Highway",
                        "address_line_2": null,
                        "state": "NC",
                        "city": "Troutman",
                        "country": "US",
                        "day_phone": "7049805000",
                        "zipcode": "28166"
                    },
                    "node_type": null,
                    "node_id": "2750",
                    "description": "Troutman Lowe's"
                },
                "status": "Created",
                "cancelled_quantity": null,
                "cancelled_date": null,
                "vendor_po_no": null,
                "is_dso_fully_cancelled": null,
                "parent_relationships": [
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251222164412050469968947",
                        "parent_prime_line_no": null
                    },
                    {
                        "quantity": "1",
                        "relationship_type": "ProductDeliveryService",
                        "parent_order_line_key": "20251222164412050469968949",
                        "parent_prime_line_no": null
                    }
                ],
                "so_shipment_lines": null,
                "is_rti_item": "N",
                "allow_change_pickup_store": "N",
                "pcr_group_type": "NON_PCR_GROUP",
                "ship_together_no": null,
                "mod_eligibility": {
                    "add_epp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add EPP is not allowed as item is not eligible for EPP"
                        ]
                    },
                    "cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "add_delivery_service_options": {
                        "allow": "N",
                        "disable_reason": [
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "reship_lines": {
                        "allow": "N",
                        "disable_reason": [
                            "Reship is allowed only when Parcel lines are in shipped status.",
                            "Reship only allowed for WEX or STK line type."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "N",
                        "disable_reason": [
                            "Line is not eligible for Service Grouping."
                        ]
                    },
                    "allow_change_pickup_store": {
                        "allow": "N",
                        "disable_reason": [
                            "This Item is not a product",
                            "Delivery Method is not PICK"
                        ]
                    },
                    "price_unlock_allowed": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "partial_cancellation_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery/Gig Delivery Service/installer Pickup fee Lines cannot be cancelled"
                        ]
                    },
                    "cancellation_allowed_only_with_parent": {
                        "allow": "N",
                        "disable_reason": null
                    },
                    "allow_change_fulfillment_option": {
                        "allow": "N",
                        "disable_reason": [
                            "Blocking CFO as delivery method is neither DEL nor PICK.",
                            "Not Allowed for Non Product Lines"
                        ]
                    },
                    "allow_pickup_contact_change": {
                        "allow": "N",
                        "disable_reason": [
                            "Delivery Method is not PICK",
                            "Not eligible Pick Up Line"
                        ]
                    },
                    "add_rp_xp_allowed": {
                        "allow": "N",
                        "disable_reason": [
                            "Add XP and RP Item is not enabled for Non Prod/ Non RGL line"
                        ]
                    },
                    "allow_change_fulfillment_pick_to_gig": null
                },
                "cancellation_allowed": "N",
                "partial_cancellation_allowed": "N",
                "cancellation_allowed_only_with_parent": "N"
            }
        ],
        "alternatePickupPeople": {},
        "active_del_line_exists": "Y",
        "sortedAppointments": [
            "12/29/202508:002025122216441207962644213"
        ],
        "services": "$79.00 ",
        "sub_total": "$711.00 ",
        "tax": "$53.33 ",
        "text_opt_in": "(704) 737 - 5350",
        "tems_id": "-",
        "invoice_no": "91438",
        "transaction": "-",
        "notes": {
            "note": [
                {
                    "contact_time": "2025-12-22T11:44:12.910447293-05:00",
                    "contact_user": "",
                    "note_text": "Order Placement Confirmation email has been sent to customer at email address, \"chaddlugo@gmail.com\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-12-26T08:10:24.855537814-05:00",
                    "contact_user": "",
                    "note_text": "Lowes Delivery Schedule Reminder text message has been sent to customer at phone number, \"7047375350\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-12-22T11:44:12.894198229-05:00",
                    "contact_user": "",
                    "note_text": "Order Placement Confirmation text message has been sent to customer at phone number, \"7047375350\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                },
                {
                    "contact_time": "2025-12-26T08:10:24.882238363-05:00",
                    "contact_user": "",
                    "note_text": "Lowes Delivery Schedule Reminder email has been sent to customer at email address, \"chaddlugo@gmail.com\"",
                    "user": null,
                    "extn": {
                        "extn_comment_type": "System Activity",
                        "extn_store_no": ""
                    }
                }
            ]
        },
        "events": {
            "event": [],
            "number_of_events": 0
        },
        "deliveryAppointments": [
            {
                "apptString": "Appt 1",
                "appointmentDate": "12/29/2025",
                "startTime": "08:00 AM",
                "endTime": "08:00 PM",
                "index": 0,
                "apptData": {
                    "appt_start_date": "2025-12-29T08:00-05:00",
                    "appt_end_date": "2025-12-29T20:00-05:00",
                    "appt_key": "2025122216441207962644213",
                    "timezone": "EST5EDT",
                    "delivery_instruction": null,
                    "quantity": "1",
                    "appt_status": "OPEN",
                    "description": "Ready for Pick",
                    "installer_name": null,
                    "installer_phone_no": null,
                    "installer_pmoc": null,
                    "installer_email": null,
                    "installer_fax": null,
                    "work_order_no": "1018839924",
                    "appt_seq_no": "1",
                    "delivery_status": "Scheduled",
                    "delivery_sub_status": "NO_DATA",
                    "lws_truck_type": "Box Truck",
                    "work_order_status": "1100.6000",
                    "work_order_key": "2025122216441207651795970",
                    "is_appointment_eligible": "Y",
                    "is_post_invoice_scenario": null,
                    "work_order_modified": null,
                    "hard_reservation_done": "Y",
                    "ds_prime_line_no": "3",
                    "appointment_type": "Default",
                    "max_appt_seq_no": "1",
                    "delivery_id": "1040187872"
                }
            }
        ],
        "order_header_key": "20251222164412045199499224",
        "is_military": "N",
        "pro_indicator": "No",
        "is_employee": "N",
        "entry_type": "LOWES_COM",
        "document_type": "0001",
        "omnia_mod_hold_applied": "Y",
        "full_cancellation_allowed": "Y",
        "allow_schedule_appointment_later": "N",
        "display_lock_icon": "N",
        "has_pending_changes": "N",
        "loyalty_reward": {
            "membership_status": "ACTIVE",
            "membership_type": "DIY",
            "shipping_discount_under_loyalty": "N",
            "tier_metadata_name": "Gold Key"
        },
        "international_sale": null,
        "partial_payment_details": [],
        "extn_order_type": "STANDARD",
        "only_full_cancellation_allowed": "N",
        "allow_change_del_instr": "Y",
        "allow_change_del_address": "Y",
        "multiple_del_instr": "N",
        "allow_change_del_appt": "Y",
        "multiple_del_address": "N",
        "shipping_address1": "236 Transco Rd, ",
        "shipping_address2": "mooresville, NC 28117",
        "shipAddress_firstName": "chad",
        "shipAddress_lastName": "dlugoszewski",
        "full_delivery_address": {
            "address_line_1": "236 Transco Rd",
            "address_line_2": "",
            "city": "mooresville",
            "state": "NC",
            "zipcode": "28117",
            "latitude": "35.524002",
            "longitude": "-80.860412",
            "country": "US",
            "address_key": "3f6ab523-4451-44e6-8664-06266026b3d2",
            "is_address_verified": "Y",
            "is_commercial_address": "N",
            "first_name": "chad",
            "last_name": "dlugoszewski",
            "city_state_zip": "mooresville, NC 28117"
        },
        "delivery_instruction": "-",
        "editDeliveryInstruction": "",
        "isOrderHasLD": true,
        "isOrderHasDD": false,
        "isOrderHasPD": true,
        "appointments": [
            {
                "appointment_id": "5f51f9ff-fe01-4643-bb17-c5c5bfdfd6f2",
                "appt_start_date": "2025-12-29T08:00-05:00",
                "appt_end_date": "2025-12-29T20:00-05:00",
                "appt_status": "OPEN",
                "appt_key": "2025122216441207962644213",
                "work_order_key": "2025122216441207651795970",
                "lws_truck_type": "Box Truck",
                "work_order_status": "1100.6000",
                "work_order_no": "1018839924",
                "is_appointment_eligible": "Y",
                "order_lines": [
                    {
                        "order_line_key": "20251222164412050469968949",
                        "item_id": "5509456",
                        "item_desc": "36-in x 80-in Primed Solid core 1-panel Left hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                        "quantity": "2",
                        "model_no": "10125208",
                        "shipment_key": null,
                        "shipment_line_key": null,
                        "status_desc": "Ready for Pick",
                        "delivery_method": "DEL",
                        "fulfillment_location": "2750",
                        "prime_line_no": "1",
                        "line_status": "3350.0020",
                        "min_line_status": "3350.0020",
                        "is_PCR_item": false,
                        "ship_together_no": null
                    },
                    {
                        "order_line_key": "20251222164412050469968947",
                        "item_id": "5509449",
                        "item_desc": "36-in x 80-in Primed Solid core 1-panel Right hand Smooth Primed MDF Flat Jamb Single Prehung Interior Door with",
                        "quantity": "1",
                        "model_no": "10125207",
                        "shipment_key": null,
                        "shipment_line_key": null,
                        "status_desc": "Ready for Pick",
                        "delivery_method": "DEL",
                        "fulfillment_location": "2750",
                        "prime_line_no": "2",
                        "line_status": "3350.0020",
                        "min_line_status": "3350.0020",
                        "is_PCR_item": false,
                        "ship_together_no": null
                    }
                ],
                "mod_eligibility": {
                    "schedule_redelivery": {
                        "allow": "N",
                        "disable_reason": [
                            "Not allowed due to order status"
                        ]
                    },
                    "load_to_truck": {
                        "allow": "N",
                        "disable_reason": [
                            "Not in Ready for Customer status.",
                            "Not authorized.",
                            "Available on day of delivery."
                        ]
                    },
                    "split_service_grouping_update": {
                        "allow": "Y",
                        "disable_reason": null
                    },
                    "post_load_to_truck_correction": {
                        "allow": "N",
                        "disable_reason": [
                            "Post Load To Truck is not possible because of the status of the order"
                        ]
                    },
                    "partial_post_load_to_truck_correction": {
                        "allow": "N",
                        "disable_reason": [
                            "Post load to truck correction is not allowed or Partial post load to truck correction already done.",
                            "Post Load To Truck is not possible because of the status of the order"
                        ]
                    }
                }
            }
        ],
        "isAppointmentModEligible": true,
        "allow_change_fulfillment_option": "Y",
        "isOrderHasPS": false,
        "isOrderHasSOSManual": false,
        "isOrderHasOthers": true,
        "isOrderHasServiceLines": true,
        "price_unlock_allowed": "Y",
        "applicable_price_unlock_subtotal": "$711.00 ",
        "unlocked_subtotal": "$711.00 ",
        "isUserInfoAvailable": false,
        "add_line_allowed": "Y",
        "allow_customer_pickup": "N",
        "allow_change_complete_address": "Y",
        "max_customer_pickup_date": "Unscheduled",
        "all_eligible_pickup_items_available": "Y",
        "has_appeasement_invoice": "N",
        "pickup_availability_date": "",
        "allow_puis_expected_date_change": "N",
        "allow_preferred_method_of_contact_change": "Y",
        "disable_pmoc_change_reason": null,
        "allow_staging_location_change": "Y",
        "disable_staging_location_change_reason": null,
        "associate_thresholds": [],
        "order_hold_types": {
            "order_hold_type": [
                {
                    "hold_type": "MODIFICATION_HOLD",
                    "status": "1100",
                    "extn": {
                        "extn_token": "OmniaStore_80100109_2750"
                    },
                    "reason_text": "MODIFY_SERVICE_GROUPING",
                    "last_hold_type_date": "2025-12-26T14:54:05.410812515Z",
                    "resolver_user_id": null,
                    "transaction_id": "097720af-f751-4eff-80f6-27c4f210ea81"
                }
            ]
        },
        "isOrderHasReturnLines": false,
        "max_prime_line_no": "3",
        "maxPrimeLineNo": "3",
        "is_delayed_settlement": null,
        "order_date": "2025-12-22T11:44:09.828-05:00",
        "taxExemptionStepId": "",
        "taxExemptioValidFlag": "N",
        "order_capture_location": "0595",
        "original_master_invoice_no": "218528586",
        "return_orders": null,
        "original_business_date": "2025-12-22T00:00:00",
        "original_sales_date": "2025-12-22T11:44:12",
        "sales_order": null,
        "order_with_lws_fraud_reject_hold": "N",
        "merchant_id": null,
        "xTraceId": "998c3d40-8a9e-4d1f-b607-d5a23a43f163",
        "allow_change_payment": "Y",
        "pending_auth_amount": "0.00",
        "allow_synchrony_change_payment": "Y",
        "amount_collected": "0.00",
        "allow_pickup_contact_change": "N",
        "disable_pickup_contact_change_reason": "Not allowed due to order status.",
        "pickup_contacts": null,
        "mod_block_reasons": {
            "CANCEL_ORDER": null,
            "CHANGE_DEL_ADDRESS": null,
            "CHANGE_DEL_INSTRUCTION": null,
            "CHANGE_DEL_APPT": null,
            "CHANGE_FULFILLMENT_OPTION": null,
            "PRICE_UNLOCK": null,
            "ADD_ITEM": null,
            "SCH_DEL_APPT": null,
            "MODIFY_PUIS_DATE": null,
            "MODIFY_CUST_PMOC": null,
            "MODIFY_PICKUP_CONTACT": null,
            "CHANGE_PAYMENT": null
        },
        "mod_eligibility": {
            "full_cancellation_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_del_address": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_delivery_address": {
                "allow": "N",
                "disable_reason": [
                    "Adding delivery address is not allowed for non refund fulfilment orders"
                ]
            },
            "allow_change_del_instr": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_del_appt": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_complete_address": {
                "allow": "Y"
            },
            "allow_schedule_appointment_later": {
                "allow": "N",
                "disable_reason": null
            },
            "allow_change_fulfillment_option": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_line_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "price_unlock_allowed": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_coupon_promotion": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_staging_location_change": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_pickup_contact_change": {
                "allow": "N",
                "disable_reason": [
                    "No eligible Pick Up Line"
                ]
            },
            "allow_puis_expected_date_change": {
                "allow": "N",
                "disable_reason": [
                    "OrderLine status is Ready for Customer"
                ]
            },
            "allow_customer_pickup": {
                "allow": "N",
                "disable_reason": [
                    "Not allowed due to line status"
                ]
            },
            "allow_preferred_method_of_contact_change": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_change_payment": {
                "allow": "Y",
                "disable_reason": null
            },
            "allow_tax_exemption_modification": null,
            "tax_exemption": {
                "allow": "Y",
                "disable_reason": null
            },
            "add_free_shipping": {
                "allow": "N",
                "disable_reason": [
                    "No active parcel lines on this order"
                ]
            },
            "add_military_discount": {
                "allow": "Y",
                "disable_reason": null
            },
            "schedule_redelivery": {
                "allow": "N",
                "disable_reason": null
            },
            "load_to_truck": {
                "allow": "N",
                "disable_reason": null
            },
            "customer_appeasement": {
                "allow": "Y",
                "disable_reason": null
            },
            "all_modification": {
                "allow": "Y",
                "disable_reason": null
            },
            "only_full_cancellation_allowed": {
                "allow": "N",
                "disable_reason": null
            },
            "allow_external_pickup": {
                "allow": "N",
                "disable_reason": [
                    "Order Line is not in valid status"
                ]
            },
            "allow_change_fulfillment_pick_to_gig": null
        },
        "organization_code": null,
        "enterprise_code": "LOWES",
        "orderDetailLastUpdatedTime": "12/26/2025 08:24 PM",
        "vsp_indicator": "N",
        "fraud_status": "ACCEPT",
        "cart_type": "SHOPPING",
        "quote_type": "",
        "quote_id": "",
        "outlet_store": "N",
        "identity_id": "3e6e73ea-4a5b-4dcb-812f-97acbc479c97",
        "is_registered_customer": "Y",
        "spanId": "c449ce74-fe92-497a-a84e-09ce6e50f765"
    },
    "groupByProjects": true,
    "showSSTIMileageFee": true
};

// Orderline Services Header Data...
/* 
const oderLineServicesHeaderData = [
  {
    key: orderLineServiceHeader.itemDesc,
    name: 'Product Details',
    output(value, row) {
      return (
        <ProductDetailsServices
          productDetails={{ services: [row] }}
          showQuantity
        />
      );
    }
  },
  {
    key: orderLineServiceHeader.type,
    name: 'Fulfillment Type',
    output() {
      return null;
    }
  },
  {
    key: orderLineServiceHeader.fulfillment_date,
    name: 'Fulfillment Date',
    output() {
      return null;
    }
  },
  {
    key: orderLineServiceHeader.fulfillment_location,
    name: 'Fulfillment Location',
    output() {
      return null;
    }
  },
  {
    key: orderLineServiceHeader.vendor_po_no,
    name: 'PO #',
    output() {
      return null;
    }
  },
  {
    key: orderLineServiceHeader.invoice_no,
    name: 'Invoice #',
    output() {
      return null;
    }
  },
  {
    key: orderLineServiceHeader.status,
    name: 'Status',
    output() {
      return null;
    }
  }
]; */