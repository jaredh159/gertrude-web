import React from 'react';
import cx from 'classnames';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Label } from '@shared/components';

interface Props<Value extends string> {
  options: Array<{ value: Value; display: string }>;
  selectedOption: Value;
  setSelected(value: Value): void;
  label?: string;
  deemphasized?: boolean;
}

function SelectMenu<Value extends string = string>({
  options,
  selectedOption,
  setSelected,
  label,
  deemphasized = false,
}: Parameters<React.FC<Props<Value>>>[0]): ReturnType<React.FC<Props<Value>>> {
  return (
    <Listbox value={selectedOption} onChange={setSelected}>
      {({ open }) => (
        <div className="relative">
          {label && <Label className="w-full inline-block pb-px">{label}</Label>}
          <div className="relative">
            <div className="rounded-md w-full shadow-sm">
              <div className="relative z-0 inline-flex rounded-md w-full border">
                <div className="relative flex flex-grow items-center bg-white pl-3 pr-4 border border-transparent rounded-l-md text-gray-700">
                  <p className="ml-2.5 font-medium">
                    {(options.find((opt) => opt.value === selectedOption) ?? options[0])
                      ?.display ?? `make a selection...`}
                  </p>
                </div>
                <Listbox.Button
                  className={cx(
                    `relative inline-flex items-center px-4 rounded-l-none rounded-r-md text-sm font-medium focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 [transition:100ms]`,
                    !deemphasized
                      ? `py-3 bg-violet-800 text-white hover:bg-violet-900`
                      : `py-2 bg-white text-gray-400 hover:bg-gray-100`,
                  )}
                >
                  <span className="sr-only">Change published status</span>
                  <i
                    className={`fa fa-chevron-down text-xl text-opacity-90 transition duration-100 ${
                      open ? `-rotate-180` : `rotate-0`
                    }`}
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="origin-top-right absolute z-20 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {options.map(({ value, display }) => (
                  <Listbox.Option
                    key={value}
                    className={({ active }) =>
                      cx(
                        active ? `bg-violet-100` : `text-gray-900`,
                        `cursor-pointer select-none relative p-3.5 text-md`,
                      )
                    }
                    value={value}
                  >
                    {({ selected }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? `font-semibold` : `font-normal`}>
                            {display}
                          </p>
                          {selected ? (
                            <span className={`text-violet-700`}>
                              <i className="fa fa-check h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}

export default SelectMenu;