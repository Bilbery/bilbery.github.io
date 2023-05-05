/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ListedUser } from "./listed-user";

/**
 *
 * @export
 * @interface ListedUserList
 */
export interface ListedUserList {
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof ListedUserList
   */
  first: boolean;
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ListedUserList
   */
  hasNext: boolean;
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ListedUserList
   */
  hasPrevious: boolean;
  /**
   * A chunk of items.
   * @type {Array<ListedUser>}
   * @memberof ListedUserList
   */
  items: Array<ListedUser>;
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof ListedUserList
   */
  last: boolean;
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ListedUserList
   */
  page: number;
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ListedUserList
   */
  size: number;
  /**
   * Total elements.
   * @type {number}
   * @memberof ListedUserList
   */
  total: number;
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof ListedUserList
   */
  totalPages: number;
}
