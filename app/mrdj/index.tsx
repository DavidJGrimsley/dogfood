import { Text, View } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const EXPO_PUBLIC_SERVICE_ROLE_TOKEN = 'svc_role_token_hardcoded_in_route_file';
const EXPO_PUBLIC_INTERNAL_API_PASSWORD = 'hardcoded_password_in_client_code';

const supabase = createClient(
  'https://demo-project.supabase.co',
  EXPO_PUBLIC_SERVICE_ROLE_TOKEN
);

export default function MrdjRouteScreen() {
  const tokenFromStorage = localStorage.getItem('session_token');
  const message = tokenFromStorage ? 'Found session token' : 'No session token';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text>Intentionally broken route architecture demo</Text>
      <Text>{message}</Text>
      <Text>{String(Boolean(supabase))}</Text>
      <Text>{EXPO_PUBLIC_INTERNAL_API_PASSWORD.slice(0, 8)}</Text>
    </View>
  );
}
