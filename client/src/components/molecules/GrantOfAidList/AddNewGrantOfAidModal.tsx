import Select from 'react-select'
import { Dialog } from '@headlessui/react'
import React, { FC, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Plus, X, FilePlus, Calendar, Minus } from 'react-feather'
import { useFieldArray, useForm, Controller } from 'react-hook-form'

import { codesData } from '~/shared/data/codesData'
import { Spinner } from '~/shared/icons/SpinnerIcon'
import { GrantOfAidFormValues } from '~/shared/types'
import { GrantOfAidSchema } from '~/shared/validation'
import DialogBox from '~/components/templates/DialogBox'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

const AddNewGrantOfAidModal: FC<Props> = ({ isOpen, closeModal }): JSX.Element => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<GrantOfAidFormValues>({
    mode: 'onTouched',
    resolver: yupResolver(GrantOfAidSchema)
  })

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'codes'
  })

  useEffect(() => {
    if (isOpen) {
      reset({
        extension: '',
        date_effective: '',
        codes: [
          {
            code: ''
          }
        ]
      })
    }
  }, [isOpen])

  // Add New Code
  const handleAddNewCode = () => append({ code: '' })

  // Remove Code
  const handleRemoveCode = (index: number) => remove(index)

  // Handle Submit Add Grant of Aid
  const handleAddGrantOfAid = async (data: GrantOfAidFormValues): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        console.log(data)
        // closeModal()
      }, 1000)
    })
  }

  return (
    <DialogBox isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
        <form onSubmit={handleSubmit(handleAddGrantOfAid)}>
          {/* MODAL HEADER */}
          <header className="flex items-center justify-between space-x-2 border-b border-slate-300 py-4 px-5">
            <div className="flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span className="text-lg font-semibold">Add Grant of Aid</span>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-md p-0.5 outline-none transition duration-75 ease-in-out hover:bg-slate-100 active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </header>
          {/* MODAL FORM CONTENT */}
          <main className="flex flex-col space-y-4 px-8 py-6 pb-10">
            {/* EXTENSION FIELD */}
            <section>
              <label htmlFor="extension" className="flex flex-col space-y-1">
                <h2 className="text-sm text-slate-700">
                  Extension <span className="text-rose-500">*</span>
                </h2>
                <div className="group relative">
                  <span
                    className={`
                      absolute inset-y-0 flex items-center border-r-2 border-slate-300 px-2.5 
                    group-focus-within:border-barclerk-30
                      ${errors?.extension && 'border-rose-400 group-focus-within:border-rose-400'}
                    `}
                  >
                    <FilePlus
                      className={`
                      h-5 w-5 text-slate-400  group-focus-within:text-barclerk-30
                      ${errors?.extension && 'text-rose-400 group-focus-within:text-rose-400'}
                    `}
                    />
                  </span>
                  <input
                    type="text"
                    id="extension"
                    {...register('extension')}
                    disabled={isSubmitting}
                    className={`
                      w-full rounded-md border-2 border-slate-300 pl-12 focus:border-barclerk-30 focus:ring-barclerk-30
                      disabled:cursor-not-allowed disabled:opacity-50
                      ${
                        errors?.extension &&
                        'border-rose-400 focus:border-rose-400 focus:ring-rose-400'
                      }
                    `}
                  />
                </div>
              </label>
              {errors?.extension && <span className="error">{`${errors.extension.message}`}</span>}
            </section>
            {/* DATE EFFECTIVE FIELD */}
            <section>
              <label htmlFor="date_effective" className="flex flex-col space-y-1">
                <h2 className="text-sm text-slate-700">
                  Date Effective <span className="text-rose-500">*</span>
                </h2>
                <div className="group relative">
                  <span
                    className={`
                      absolute inset-y-0 flex items-center border-r-2 border-slate-300 px-2.5 
                      group-focus-within:border-barclerk-30
                      ${
                        errors?.date_effective &&
                        'border-rose-400 group-focus-within:border-rose-400'
                      }
                    `}
                  >
                    <Calendar
                      className={`
                      h-5 w-5 text-slate-400  group-focus-within:text-barclerk-30
                      ${errors?.date_effective && 'text-rose-400 group-focus-within:text-rose-400'}
                    `}
                    />
                  </span>
                  <input
                    type="date"
                    id="date_effective"
                    {...register('date_effective')}
                    disabled={isSubmitting}
                    className={`
                      w-full rounded-md border-2 border-slate-300 pl-12 focus:border-barclerk-30 focus:ring-barclerk-30
                      disabled:cursor-not-allowed disabled:opacity-50 
                      ${
                        errors?.date_effective &&
                        'border-rose-400 focus:border-rose-400 focus:ring-rose-400'
                      }
                    `}
                  />
                </div>
              </label>
              {errors?.date_effective && (
                <span className="error">{`${errors.date_effective.message}`}</span>
              )}
            </section>
            {fields.map(({ id, code }, i) => (
              <section key={id}>
                <label className="mb-1 flex flex-col space-y-1">
                  <h2 className="text-sm text-slate-700">
                    Code {i + 1} <span className="text-rose-500">*</span>
                  </h2>
                  <div className="flex w-full flex-row items-center space-x-2">
                    <div className="group relative w-full">
                      <Controller
                        name={`codes.${i}.code` as any}
                        control={control}
                        render={({ field: { value, onChange, name } }) => {
                          return (
                            <Select
                              options={codesData}
                              placeholder={'Select code'}
                              isDisabled={isSubmitting}
                              isClearable
                              onChange={(e) => onChange(e?.label)}
                              className="rounded-md border-none ring-1 ring-slate-300 focus:ring-barclerk-30"
                            />
                          )
                        }}
                      />
                      {errors.codes?.[i]?.code && (
                        <span className="error absolute -bottom-4 text-[10px]">{`${errors.codes?.[i]?.code?.message}`}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className={`
                        rounded border-2 border-slate-300 p-2 outline-none disabled:cursor-not-allowed 
                        disabled:opacity-50 hover:bg-slate-50 active:scale-95
                        ${fields.length === 1 ? 'active:scale-100' : ''}
                      `}
                      onClick={() => handleRemoveCode(i)}
                      disabled={fields?.length === 1 || isSubmitting}
                    >
                      <Minus className="h-6 w-6 text-slate-400" />
                    </button>
                    <button
                      type="button"
                      className={`
                        rounded border-2 border-slate-300 p-2 outline-none disabled:cursor-not-allowed 
                        disabled:opacity-50 hover:bg-slate-50 active:scale-95
                      `}
                      onClick={handleAddNewCode}
                      disabled={isSubmitting}
                    >
                      <Plus className="h-6 w-6 text-slate-400" />
                    </button>
                  </div>
                </label>
              </section>
            ))}
          </main>
          {/* MODAL FOOTER SUBMIT AND CANCEL BUTTON */}
          <footer className="flex justify-end space-x-3 border-t border-slate-300 bg-slate-50 py-4 px-9">
            <button
              type="button"
              onClick={closeModal}
              disabled={isSubmitting}
              className={`
                w-36 rounded border border-slate-300 bg-white 
                text-slate-600 outline-none transition duration-75 ease-in-out
                disabled:cursor-not-allowed disabled:opacity-50 hover:border-slate-400 hover:bg-white
                hover:text-slate-700 active:scale-95 disabled:active:scale-100
              `}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                flex w-36 items-center justify-center rounded bg-barclerk-10 py-2 text-white 
                outline-none transition duration-75 ease-in-out focus:bg-barclerk-10/90 disabled:cursor-not-allowed disabled:opacity-50
                hover:bg-barclerk-10/90 disabled:hover:bg-barclerk-10 active:scale-95 disabled:active:scale-100
              `}
            >
              {isSubmitting ? <Spinner className="h-6 w-6" /> : 'Save'}
            </button>
          </footer>
        </form>
      </Dialog.Panel>
    </DialogBox>
  )
}

export default AddNewGrantOfAidModal
