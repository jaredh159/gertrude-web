import type { GetAdmin, CreatePendingNotificationMethod } from './';

export type NewAdminNotificationMethodEvent =
  | { type: 'create_clicked' }
  | { type: 'cancel_clicked' }
  | { type: 'send_code_clicked' }
  | { type: 'verify_code_clicked' }
  | { type: 'code_updated'; code: string }
  | { type: 'email_address_updated'; email: string }
  | { type: 'slack_channel_name_updated'; channelName: string }
  | { type: 'slack_channel_id_updated'; channelId: string }
  | { type: 'slack_token_updated'; token: string }
  | { type: 'text_phone_number_updated'; phoneNumber: string }
  | {
      type: 'method_type_updated';
      methodType: CreatePendingNotificationMethod.Input['type'];
    };

export type PendingNotificationMethod = {
  sendCodeRequest: RequestState<UUID>;
  confirmationRequest: RequestState;
  confirmationCode: string;
} & CreatePendingNotificationMethod.Input;
