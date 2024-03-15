/**
 * The type of parameters that be sent to next page.
 */
export type PageParams = any;
/**
 * The type of result from presented page.
 */
export type PageResult = any;
/**
 * The listener called when current page is changed.
 *
 * @param page New page name.
 * @param params Parameters of new page.
 * @param result A result from presented page using `pop` or `rewind` methods.
 */
export type ChangeListener = (page: string, params?: PageParams, result?: PageResult) => void;

type Page = { name: string; params?: PageParams };

/**
 * The navigation controller supports to switch the page for SPA without History API.
 */
export class NavigationController {
  private pages: Page[] = [];
  private lastResult?: PageResult;
  private listener?: ChangeListener;

  constructor() {}

  /**
   * Initializes the navigation controller with initial page.
   * This method must be called only once before calling `push` method, etc.
   *
   * @param initPage Initial page name.
   * @param params Initial parameters of `initPage`.
   * @return This instance.
   */
  init(initPage: string, params?: PageParams): NavigationController {
    this.pages = [{ name: initPage, params }];
    return this;
  }

  /**
   * Sets ChangeListener that is called when current page is changed.
   *
   * @param listener A listener.
   * @return This instance.
   */
  setChangeListener(listener: ChangeListener): NavigationController {
    this.listener = listener;
    return this;
  }

  /**
   * Removes ChangeListener that is set to the navigation controller.
   *
   * @return This instance.
   */
  clearChangeListener(): NavigationController {
    this.listener = undefined;
    return this;
  }

  /**
   * Goes forward to next page.
   *
   * @param page New page name.
   * @param params Any parameters that be sent to next page.
   */
  push(page: string, params?: PageParams) {
    this.pages.push({ name: page, params });

    setTimeout(() => this.listener?.(page, params), 0);
  }

  /**
   * Goes back to previous page if current page is not first.
   *
   * @param result A result that be sent to previous page that presented current page.
   */
  pop(result?: PageResult) {
    if (this.pages.length === 1) {
      // Can not go back because of first page.
      return;
    }

    this.pages.pop();
    this.lastResult = result;

    const { name, params } = this.currentPage;
    setTimeout(() => this.listener?.(name, params, result), 0);
  }

  /**
   * Replaces current page with specified page.
   *
   * @param page New page name.
   * @param params Any parameters that be sent to next page.
   */
  replace(page: string, params?: PageParams) {
    this.pages.pop();
    this.pages.push({ name: page, params });

    setTimeout(() => this.listener?.(page, params), 0);
  }

  /**
   * Goes back to first page and resets histories.
   *
   * @param result A result that be sent to first page.
   */
  rewind(result?: PageResult) {
    const firstPage = this.pages[0];
    this.pages = [firstPage];
    this.lastResult = result;

    setTimeout(() => this.listener?.(firstPage.name, firstPage.params, result), 0);
  }

  /**
   * Returns the parameters of current page if exists.
   */
  getParams(): PageParams | undefined {
    return this.currentPage.params;
  }

  /**
   * Returns the result from presented page.
   */
  getResult(): PageResult | undefined {
    return this.lastResult;
  }

  private get currentPage(): Page {
    return this.pages[this.pages.length - 1];
  }
}

/**
 * The navigation controller object in global scope.
 */
export const navigationController = new NavigationController();

/**
 * Goes forward to next page.
 *
 * @param page New page name.
 * @param params Any parameters that be sent to next page.
 */
export function pushPage(page: string, params?: PageParams) {
  navigationController.push(page, params);
}

/**
 * Goes back to previous page if current page is not first.
 *
 * @param result A result that be sent to previous page that presented current page.
 */
export function popPage(result?: PageResult) {
  navigationController.pop(result);
}

/**
 * Replaces current page with specified page.
 *
 * @param page New page name.
 * @param params Any parameters that be sent to next page.
 */
export function replacePage(page: string, params?: PageParams) {
  navigationController.replace(page, params);
}

/**
 * Goes back to first page and resets histories.
 *
 * @param result A result that be sent to first page.
 */
export function rewindPages(result?: PageResult) {
  navigationController.rewind(result);
}

/**
 * Returns the parameters of current page if exists.
 */
export function getPageParams(): PageParams | undefined {
  return navigationController.getParams();
}

/**
 * Returns the result from presented page.
 */
export function getPageResult(): PageResult | undefined {
  return navigationController.getResult();
}
