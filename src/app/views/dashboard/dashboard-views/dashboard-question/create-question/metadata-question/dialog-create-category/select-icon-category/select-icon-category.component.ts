import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bdc-bo-select-icon',
  templateUrl: './select-icon-category.component.html',
  styleUrls: ['./select-icon-category.component.scss'],
})
export class SelectIconComponent {
  protected panelOpenState = false;
  protected selectedIconId = '';
  protected selectedIcon?: any;
  @Output() selectIcon = new EventEmitter<string>();

  protected iconsSocial = [
    { name: 'sentiment_satisfied', selected: false },
    { name: 'group', selected: false },
    { name: 'handshake', selected: false },
    { name: 'psychiatry', selected: false },
    { name: 'public', selected: false },
    { name: 'support_agent', selected: false },
    { name: 'thumbs_up_down', selected: false },
    { name: 'emoji_flags', selected: false },
    { name: 'water_drop', selected: false },
    { name: 'rocket_launch', selected: false },
    { name: 'diversity_3', selected: false },
    { name: 'person', selected: false },
    { name: 'workspace_premium', selected: false },
    { name: 'add_reaction', selected: false },
    { name: 'thumb_up', selected: false },
    { name: 'eco', selected: false },
    { name: 'emoji_objects', selected: false },
    { name: 'pets', selected: false },
  ];
  protected iconsBusiness = [
    { name: 'payments', selected: false },
    { name: 'receipt_long', selected: false },
    { name: 'shopping_bag', selected: false },
    { name: 'shopping_cart', selected: false },
    { name: 'storefront', selected: false },
    { name: 'timeline', selected: false },
    { name: 'trending_flat', selected: false },
    { name: 'bar_chart', selected: false },
    { name: 'credit_card', selected: false },
    { name: 'monitoring', selected: false },
    { name: 'qr_code_scanner', selected: false },
    { name: 'tenancy', selected: false },
    { name: 'database', selected: false },
    { name: 'loyalty', selected: false },
    { name: 'monetization_on', selected: false },
    { name: 'candlestick_chart', selected: false },
    { name: 'podium', selected: false },
    { name: 'precision_manufacturing', selected: false },
  ];
  protected iconsAnnouncement = [
    { name: 'call', selected: false },
    { name: 'cell_tower', selected: false },
    { name: 'forum', selected: false },
    { name: 'import_contacts', selected: false },
    { name: 'hub', selected: false },
    { name: 'inbox_customize', selected: false },
    { name: 'inventory_2', selected: false },
    { name: 'notifications', selected: false },
    { name: 'notifications', selected: false },
    { name: 'phonelink_ring', selected: false },
    { name: 'power_settings_new', selected: false },
    { name: 'reviews', selected: false },
    { name: 'duo', selected: false },
    { name: 'voicemail', selected: false },
    { name: 'send', selected: false },
    { name: 'contacts', selected: false },
    { name: 'mail', selected: false },
    { name: 'mail_lock', selected: false },
  ];

  protected handleSelectIcon(
    icon: { name: string; selected: boolean },
    index: number,
    groupName: string
  ) {
    this.selectedIconId = `${groupName}-${index}`;
    icon.selected = true;
    this.selectIcon.emit(icon.name);
  }
}
