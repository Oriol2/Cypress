Feature: KX Scenarios
  
  @api @main_page
  Scenario: TC_1_Search_success_case
    When Search by 'adidas'
    Then Expect 'adidas' to be 'displayed' as 'normal' case

  @api
  Scenario: TC_2_Search_fail_case
    When Search by '12345'
    Then Expect '12345' to be 'hidden' as 'normal' case
    And Expect "Sorry, we couldn't find any results matching" message is displayed
  
  @api
  Scenario: TC_3_Search_by_recent_product
    Given Clear Search
    When Click on 'adidas' button
    Then Expect 'adidas' to be 'displayed' as 'recent' case

  @api
  Scenario: TC_4_Clear_All_recent_product
    Given Clear Search
    When Click on 'Clear' button using 'btn-removeSearchBlank-ClearRecentlyKeywords' 'data-testid'
    Then Expect recent products are gone

  @api
  Scenario: TC_5_Search_by_trending_product
    Given Clear Search
    When Click on 'nespresso' button
    Then Expect 'nespresso' to be 'displayed' as 'normal' case

