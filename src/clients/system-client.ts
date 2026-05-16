import type { HealthStatus, ServiceInfo } from '../models';
import type { SystemClientContract } from '../types/contracts';
import { BaseClient } from './base-client';

export class SystemClient extends BaseClient implements SystemClientContract {
  public health(): Promise<HealthStatus> {
    return this.request({
      method: 'GET',
      path: '/v1/system/health',
    });
  }

  public info(): Promise<ServiceInfo> {
    return this.request({
      method: 'GET',
      path: '/v1/system/info',
    });
  }
}
